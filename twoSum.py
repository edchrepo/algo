# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.


# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# [2,7,11,15,2,3,2,4,5,7,11,23,321,32,21,14,24,53,12]

# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:
# Input: nums = [3,3], target = 6
# Output: [0,1]

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Solution 1: Intuition looping twice
        # for i in range(len(nums)):
        #     for j in range(len(nums)):
        #         complement = target - nums[i]
        #         if nums[j] == complement and i != j:
        #             return [i, j]
        # return
    
        # Solution 1.5: Using i + 1
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         complement = target - nums[i]
        #         if nums[j] == complement:
        #             return [i, j]

        # Solution 2.0 filling up map first:
        # map1 = {}
        # for i, n in enumerate(nums):
        #     map1[n] = i
        
        # for i, n in enumerate(nums):
        #     complement = target - n
        #     if complement in map1:
        #         return [map1[complement], i]
        #     map1[n] = i
        # return

        # Solution 2 (Optimal): Filling up map as you go
        # map1 = {}
        # for i, n in enumerate(nums):
        #     complement = target - n
        #     if complement in map1:
        #         return [map1[complement], i]
        #     map1[n] = i
            
        # return

        #To-do: implement using two pointer
        # [2,7,11,15] target 9
        # [0,1,2,6,7,11,15] target 9
        # sortedArr = sorted(nums)

newSolution = Solution()
print(newSolution.twoSum([2,7,11,15], 9))