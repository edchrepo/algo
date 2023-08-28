# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

# Example 1:
# Input: nums = [1,1,1,2,2,3], k = 2

# 1 3
# 2 2
# 3 1

# Output: [1,2]

# Example 2:
# Input: nums = [1], k = 1
# Output: [1]

from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map1 = {}

        for n in nums:
            map1[n] = map1.get(n, 0) + 1
        #[(1,3), (2,2), (3,1)]
        sortedMap = dict(sorted(map1.items(), key=lambda x: x[1], reverse=True))

        ans = []
        for key, val in sortedMap.items():
            if len(ans) < k:
                ans.append(key)
        
        # for n in nums:
        # for i in range(len(nums)):
        # for i, n in enumerate(nums):
        # for k, v in map1.items():
        

        return ans
        
newSolution = Solution()
print(newSolution.topKFrequent([4,4,1,1,1,3,3,3,3,3,2], 2))