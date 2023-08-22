# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true


# Example 2:
# Input: s = "rat", t = "car"
# Output: false

from collections import defaultdict

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # # compare the lengths of both strings
        if len(s) != len(t):
            return False
        
        # # sort both strings
        # string1 = ''.join(sorted(s))
        # string2 = ''.join(sorted(t))

        # if string1 == string2:
        #     return True
        
        # return False
    
        # set up hashMap
        newMap = {}
        newMap2 = {}
        # newMap = defaultdict(int)

        for i in range(len(s)):
            # newMap[char] += 1
            newMap[s[i]] = newMap.get(s[i], 0) + 1
            newMap2[t[i]] = newMap2.get(t[i], 0) + 1


        # you can compare two maps if they are identical
        if newMap == newMap2:
            return True
        
        # for char in t:
        #     if newMap2.get(char) != newMap.get(char):
        #         return False

        return False
        # return True
    
    
newSolution = Solution()
print(newSolution.isAnagram("anagram", "nagaram"))