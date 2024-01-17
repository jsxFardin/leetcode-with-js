/* 
* https://leetcode.com/problems/missing-number/
*/

let numbers = [1];

const missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
};


console.log(missingNumber(numbers));