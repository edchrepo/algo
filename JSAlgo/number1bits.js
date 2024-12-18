// Given a positive integer n, write a function that returns the number of 
// set bits
//  in its binary representation (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

// Constraints:

// 1 <= n <= 231 - 1
 

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    // Iterate until n becomes 0
    while (n !== 0) {
        // Increment count if the last bit is 1
        count += n & 1;
        
        // Shift n to the right by 1 to check the next bit
        n = n >>> 1; // Use unsigned right shift to handle large numbers
    }

    return count;
};

console.log(hammingWeight(11))
console.log(hammingWeight(128))
console.log(hammingWeight(2147483645))