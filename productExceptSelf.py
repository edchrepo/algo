# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
# You must write an algorithm that runs in O(n) time and without using the division operation.

# Example 1:
# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]

# Example 2:
# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Solution 1 (Optimal):
        # res = [1] * (len(nums))

        # prefix = 1
        # for i in range(1, len(nums)):
        #     res[i] = prefix
        #     prefix *= nums[i]
        # postfix = 1
        # for i in range(len(nums) - 1, -1, -1):
        #     res[i] *= postfix
        #     postfix *= nums[i]
        # return res
    
        # My Solution: O(n) Time O(n) Space
        answer = [1] * len(nums)
        
        # Calculate products of all elements to the left of i
        leftProduct = 1
        for i in range(len(nums)):
            answer[i] = leftProduct
            leftProduct *= nums[i]
        
        # Calculate products of all elements to the right of i
        rightProduct = 1
        for i in range(len(nums) - 1, -1, -1):
            answer[i] *= rightProduct
            rightProduct *= nums[i]
        
        return answer
    
        # Solution (just the intuition, not optimal):
        # [1, 2, 3, 4]
        # [1, 1, 2, 6]
        # [24, 12, 4, 1]
        
        # [1 * 24, 1 * 12, 2 * 4 , 6 * 1]
        # ans = [1] * len(nums) 
        # leftProd = [1] * len(nums)
        # rightProd = [1] * len(nums)

        # leftProduct = 1
        # for i in range(len(nums)):
        #     leftProd[i] = leftProduct
        #     leftProduct *= nums[i]

        # rightProduct = 1
        # for i in range(len(nums) - 1, -1, -1):
        #     rightProd[i] = rightProduct
        #     rightProduct *= nums[i]

        # for i in range(len(nums)):
        #     ans[i] = leftProd[i] * rightProd[i]

        # return ans
    

newSolution = Solution()
print(newSolution.productExceptSelf([1,2,3,4]))