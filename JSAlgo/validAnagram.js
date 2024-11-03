// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If lengths are different, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Create a hash map (object) to count character frequencies
    const count = {};
    const count2 = {};

    // Count characters in s and t
    // for (let i = 0; i < s.length; i++) {
    //     // Increment the count for s[i]
    //     count[s[i]] = (count[s[i]] || 0) + 1;
        
    //     // Decrement the count for t[i]
    //     count[t[i]] = (count[t[i]] || 0) - 1;
    // }

    // // Check if all values in the count object are 0
    // for (let char in count) {
    //     if (count[char] !== 0) {
    //         return false;
    //     }
    // }

    for (let i = 0; i < s.length; i++) {
        // Increment the count for s[i]
        count[s[i]] = (count[s[i]] || 0) + 1;
        
        // Decrement the count for t[i]
        count2[t[i]] = (count2[t[i]] || 0) + 1;
    }

    for (let char in count) {
        if (count[char] !== count2[char]) {
            return false;
        }
    }

    return true

};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))