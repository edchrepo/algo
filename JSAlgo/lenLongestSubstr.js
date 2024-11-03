/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};  // To store the characters and their latest indices
    let left = 0;  // Left pointer for the window
    let maxLength = 0;  // To store the maximum length of substring

    // Traverse the string using the right pointer
    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // If the character is already in the map and within the current window
        if (map[char] !== undefined && map[char] >= left) {
            // Move the left pointer to the right of the duplicate character
            left = map[char] + 1;
        }

        // Update the character's latest index in the map
        map[char] = right;

        // Calculate the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))