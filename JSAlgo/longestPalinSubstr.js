// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return "";
    
    let start = 0; // start index of the longest palindrome
    let maxLength = 1; // length of the longest palindrome
    
    // Helper function to expand around the center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; // expand to the left
            right++; // expand to the right
        }
        // Return the length of the palindrome found
        return right - left - 1;
    };
    
    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes (single character center)
        let len1 = expandAroundCenter(i, i);
        
        // Check for even-length palindromes (two character center)
        let len2 = expandAroundCenter(i, i + 1);
        
        // Get the maximum length from both cases
        let len = Math.max(len1, len2);
        
        // If we found a longer palindrome, update start and maxLength
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }
    
    // Return the longest palindrome substring
    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))