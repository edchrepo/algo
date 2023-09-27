# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Explanation: 
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.

from typing import List 

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Solution 1 (O(n^3)):
        # results = set()
        # for i in range(len(nums)):
        #     for j in range(i+1, len(nums)):
        #         for k in range(j+1, len(nums)):
        #             if nums[i] + nums[j] + nums[k] == 0:
        #             # Sorting to ensure uniqueness (to avoid duplicates)
        #                 triplet = tuple(sorted((nums[i], nums[j], nums[k])))
        #                 results.add(triplet)
    
        # return [list(triplet) for triplet in results]
        
        # Solution 2 (optimal):
        # res = []
        # nums.sort()

        # for i, a in enumerate(nums):
        #     if i > 0 and a == nums[i - 1]:
        #         continue

        #     l, r = i + 1, len(nums) - 1
        #     while l < r:
        #         threeSum = a + nums[l] + nums[r]
        #         if threeSum > 0:
        #             r -= 1
        #         elif threeSum < 0:
        #             l += 1
        #         else:
        #             res.append([a, nums[l], nums[r]])
        #             break
        # return res
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            # Skip positive integers
            if a > 0:
                break

            if i > 0 and a == nums[i - 1]:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
                        
        return res
        

newSolution = Solution()
#[-4,-1,-1,0,1,2]
print(newSolution.threeSum([-1,0,1,2,-1,-4]))
 