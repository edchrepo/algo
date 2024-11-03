// Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

var longestPalindrome = function(s) {
    const countMap = {};
    let length = 0;
    let hasOdd = false;

    // Count frequency of each character
    for (let char of s) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    // Calculate the longest possible palindrome length
    for (let count of Object.values(countMap)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    // Add 1 to the length if there's at least one odd count (center character)
    if (hasOdd) {
        length += 1;
    }

    return length;
};

console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("a"))