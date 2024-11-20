// 49. Group Anagrams
// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// const groupAnagrams = (strs) => {
//     const map = {};  // Hash map to store grouped anagrams
    
//     for (let str of strs) {
//         // Sort the string and use it as the key
//         let sortedStr = str.split('').sort().join('');
        
//         // If the sorted string is already a key in the map, add the original string to the list
//         if (map[sortedStr]) {
//             map[sortedStr].push(str);
//         } else {
//             // Otherwise, create a new entry with the sorted string as the key
//             map[sortedStr] = [str];
//         }
//     }
    
//     // Return the values of the map (arrays of grouped anagrams)
//     return Object.values(map);
// };

const groupAnagrams = (strs) => {
    const map = {}; // Use an object to store grouped anagrams

    for (let str of strs) {
        // Create a frequency array for the current string
        const freq = new Array(26).fill(0);
        for (let char of str) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Use the frequency array as a key (convert it to a string)
        const key = freq.join(',');

        // Add the string to the corresponding group
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    // Return all grouped anagrams
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]  