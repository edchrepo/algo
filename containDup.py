from typing import List
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # numSet = set() 

        # for num in nums:
        #     if num in numSet:
        #         return True
        #     numSet.add(num)

        # return False

        #[1, 2, 3, 1]
        #[1, 1, 2, 3]

        sortedArr = sorted(nums)
        for i in range(len(sortedArr) - 1):
            if sortedArr[i + 1] == sortedArr[i]:
                return True
            else:
                continue

        return False


newSolution = Solution()

print(newSolution.containsDuplicate([1,2,3,1]))

    