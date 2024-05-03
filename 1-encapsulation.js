// BEGIN
export function makeUser({ id, friends }) {
  return {
    id,
    getFriends() {
      return friends;
    },
  };
}

export function getMutualFriends(user1, user2) {
  if (!(user1 instanceof makeUser && user2 instanceof makeUser)) {
    throw new Error('Arguments must be instances of makeUser');
  }

  const user1Friends = new Set(user1.getFriends().map(friend => friend.id));
  const user2Friends = new Set(user2.getFriends().map(friend => friend.id));

  const mutualFriendsIds = [...user1Friends].filter(id =>
    user2Friends.has(id)
  );

  const mutualFriends = user1.getFriends().filter(friend =>
    mutualFriendsIds.includes(friend.id)
  );

  return mutualFriends;
}
// END


export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});