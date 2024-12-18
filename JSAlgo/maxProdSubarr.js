// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.


/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];

        // Swap if the current number is negative, because it can reverse the sign of the product
        if (current < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(current, maxProduct * current);
        minProduct = Math.min(current, minProduct * current);

        result = Math.max(result, maxProduct);
    }

    return result;
}

console.log(maxProduct([2, 3, -2, 4]));  
console.log(maxProduct([-2, 0, -1]));    

