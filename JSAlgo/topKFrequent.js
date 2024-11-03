// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = new Map();
    
    // Step 1: Count frequencies of each element
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Initialize the bucket array
    const bucket = Array(nums.length + 1).fill().map(() => []);

    // Step 3: Populate the bucket array
    for (let [num, freq] of frequencyMap) {
        bucket[freq].push(num);
    }

    // Step 4: Collect the top k frequent elements
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
};

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected output: [1,2]
console.log(topKFrequent([1], 1));           // Expected output: [1]
console.log(topKFrequent([4,4,4,2,2,1,1,1,3], 3)); // Expected output: [4,1,2] (or any order of top 3)
console.log(topKFrequent([5,7,7,7,8,8,9], 2)); // Expected output: [7,8] (or [8,7])

// Edge cases
console.log(topKFrequent([1,2,3,4,5,6,7,8,9,10], 5)); // Expected output: any 5 unique elements, since all have same frequency
console.log(topKFrequent([1,1,2,2,3,3,4,4,5,5], 3)); // Expected output: any top 3 frequent elements, e.g., [1,2,3]
