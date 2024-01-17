### **Problem Set**

#### **Problem 1: Majority Element**

Given an array `nums`, find the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

**Example 1:**
```plaintext
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```plaintext
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Example 3:**
```plaintext
Input: nums = [1,1,1,2,2,3,3,3]
Output: 1
```

**Constraints:**
- n == nums.length
- 1 <= n <= 5 * 10^5
- -2^31 <= nums[i] <= 2^31 - 1

#### **Problem 2: Missing Number**

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

**Example 1:**
```plaintext
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**
```plaintext
Input: nums = [0,1]
Output: 2
```

**Example 3:**
```plaintext
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
```

**Constraints:**
- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- All the numbers of `nums` are unique.

---

### **Problem 3: Longest Common Subsequence**

Given two strings `text1` and `text2`, return the length of their longest common subsequence. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not. A common subsequence of two strings is a subsequence that is common to both strings.

**Example 1:**
```plaintext
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

**Example 2:**
```plaintext
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

**Example 3:**
```plaintext
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

**Constraints:**
- 1 <= text1.length, text2.length <= 1000
- `text1` and `text2` consist of only lowercase English characters.

---

# FAQ

### Do I need to write full code for a problem?

Ans: No. A single function that takes the desired input & returns the desired output will work.

### How to submit the test?

Step 1: 
  - First open a new public Github Gist. 
  - go to https://gist.github.com
  - then change mode from "create secret gist" -> "create public gist"

Step 2: paste all the solutions one by one like shown below:

```
  // Problem 1
  print("answered problem 1")
  // Problem 2 
  print("answered problem 2")
```

Step 3: copy the public gist url from your browser & mail at talent@airwrk.com

e.g https://gist.github.com/ekush/27b574c3bc583e560a1e320b4b614cec


---