// BEGIN
export function make(numer = 0, denom = 1) {
    return {
      setNumer(value) {
        numer = value;
      },
      setDenom(value) {
        denom = value;
      },
      getNumer() {
        return numer;
      },
      getDenom() {
        return denom;
      },
      toString() {
        return numer + '/' + denom;
      },
      add(rational) {
        const newNumer = numer * rational.getDenom() + denom * rational.getNumer();
        const newDenom = denom * rational.getDenom();
        return make(newNumer, newDenom);
      },
    };
  };
export default make;
// END