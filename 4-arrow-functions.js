// BEGIN
export function each(collection, callback) {
    collection.forEach(function(item) {
      callback.call(item);
    });
};
export default each;
// END
