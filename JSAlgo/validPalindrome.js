// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Method 1. with reverse()
    // return s.split("").reverse().join("") === s

    // Method 2. Loop through half compare both ends
    // for(let i = 0; i < s.length / 2; i++) {
    //     if (s[i] !== s[s.length - i - 1]) {
    //         return false;
    //     }
    // }
    // return true;


    // Method 3. two pointer
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Step 3: If characters don't match, return false
        if (s[left] !== s[right]) {
            return false;
        }
        // Move the pointers
        left++;
        right--;
    }

    return true

};

console.log(isPalindrome("A man, a plan, a canal: Panama"))