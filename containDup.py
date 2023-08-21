from typing import List
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numSet = set() 

        for num in nums:
            if num in numSet:
                return True
            else:
                numSet.add(num)

        return False


newSolution = Solution()

print(newSolution.containsDuplicate([1,2,3,3,4]))

    