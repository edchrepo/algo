#https://leetcode.com/problems/container-with-most-water/description/

from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxArea = 0

        l, r = 0, len(height) - 1
        while l < r:
            if height[r] > height[l]:
                l += 1
            elif height[l] > height[r]:
                r -= 1
            area = min(height[l], height[r])*(r-l)
            maxArea = max(area, maxArea)
            l += 1
            r -= 1

        return maxArea

newSolution = Solution()
print(newSolution.maxArea([1,8,6,2,5,4,8,3,7]))