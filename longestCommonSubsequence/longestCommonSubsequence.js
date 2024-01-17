/* 
* https://leetcode.com/problems/longest-common-subsequence/
*/
const t1 = "abcde", t2 = "ace";

const longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
};

console.log(longestCommonSubsequence(t1, t2));