/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits:number[]) {
    digits[digits.length - 1] += 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (Math.floor(digits[i] / 10) <= 0) return digits;
        const curNum = digits[i];
        digits[i] %= 10;
        if (!digits[i-1]){
            digits.unshift(curNum / 10);
        } else {
            digits[i - 1] = digits[i - 1] + (curNum / 10);
        }
    }
    return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,1,2,1]));
console.log(plusOne([9]));
console.log(plusOne([9,9]));
console.log(plusOne([1,9,9]));
