// BEGIN
export function magic(...args) {
    const sum = args.reduce((acc, num) => acc + num, 0);
    const innerFunc = (...innerArgs) => {
      return magic(sum, ...innerArgs);
    };
    innerFunc.valueOf = () => sum;
    return innerFunc;
};
export default magic;
// END
