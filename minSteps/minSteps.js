/* 
* https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
 */

const minSteps = (s, t) => {
    let charMap = {};
    let result = 0;

    for (const char of s) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    for (const char of t) {
        if (!charMap[char] || charMap[char] === 0) result++;
        else charMap[char] -= 1;
    }

    return result;
};

let str1 = "gctcxyuluxjuxnsvmomavutrrfb", str2 = "qijrjrhqqjxjtprybrzpyfyqtzf";

console.log(minSteps(str1, str2));