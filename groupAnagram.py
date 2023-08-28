# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# Example 2:
# Input: strs = [""]
# Output: [[""]]

# Example 3:
# Input: strs = ["a"]
# Output: [["a"]]
from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Solution 1 (Optimal):
        # ans = defaultdict(list)

        # for s in strs:
        #     count = [0] * 26
        #     for c in s:
        #         count[ord(c) - ord("a")] += 1
        #     ans[tuple(count)].append(s)
        # return ans.values()
    
        # More intuitive solution by using the sorted keys as the key in the map.
        ans = defaultdict(list)

        for s in strs:
            sorted_str = ''.join(sorted(s))
            ans[sorted_str].append(s)
        return ans.values()
    
newSolution = Solution()
print(newSolution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))