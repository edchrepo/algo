# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

# Example 1:
# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]

# Example 2:
# Input: nums = [1], k = 1
# Output: [1]

from typing import List

# map the counts of each value
# 


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Solution 1 (Optimal) O(n):
        # count = {}
        # freq = [[] for i in range(len(nums) + 1)]

        # for n in nums:
        #     count[n] = 1 + count.get(n, 0)
        # for n, c in count.items():
        #     freq[c].append(n)
        
        # print(freq)

        # res = []
        # for i in range(len(freq) - 1, 0, -1):
        #     for n in freq[i]:
        #         res.append(n)
        #         if len(res) == k:
        #             return res

        # Solution 2: O(nlogn)
        # count = {}

        # for n in nums:
        #     count[n] = count.get(n, 0) + 1

        # # Sort items in 'count' by their frequency in descending order and get the top k numbers
        # sorted_items = sorted(count.items(), key=lambda item: item[1], reverse=True)
        # return [item[0] for item in sorted_items[:k]]
    
        # Solution 2.0: Same as above but more intuitive solution
        map1 = {}

        for n in nums:
            map1[n] = map1.get(n, 0) + 1

        # sortedMap first becomes array of tuples -> [(1,3), (2,2), (3,1)] 
        # dict cast makes it a dict -> {1:3, 2:2, 3:1}
        # sortedMap.items() -> back to array of tuples -> [(1,3), (2,2), (3,1)] 
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
print(newSolution.topKFrequent([1,1,1,2,2,3,3,3,3,2,5,6,7,1,3,1,2,8,9], 3))