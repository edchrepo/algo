# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 

# Example 1:
# Input: s = "()"
# Output: true

# Example 2:
# Input: s = "()[]{}"
# Output: true

# Example 3:
# Input: s = "(]"
# Output: false

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = { "}":"{", ")":"(", "]":"["}

        for c in s:
            if c in closeToOpen:
                if not stack or stack[-1] != closeToOpen[c]:
                    return False
                else:
                    stack.pop()
            else:
                stack.append(c)

        return True if not stack else False

newSolution = Solution()
print(newSolution.isValid("(((("))