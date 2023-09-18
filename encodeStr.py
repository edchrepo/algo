# Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

# Please implement encode and decode

# Input: ["lint","code","love","you"]
# Output: ["lint","code","love","you"]
# Explanation:
# One possible encode method is: "lint:;code:;love:;you"

class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        # write your code here
        result = ""
        for s in strs:
            result += str(len(s)) + "#" + s
        return result
    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str):
        res = []
        i = 0
        
        while i < len(str):
            j = i
            while str[j] != '#':
                j += 1
            length = int(str[i:j])
            i = j + 1
            j = i + length
            res.append(str[i:j])
            i = j
            
        return res


# class Solution:
#     """
#     @param: strs: a list of strings
#     @return: encodes a list of strings to a single string.
#     """
#     def encode(self, strs):
#         # write your code here
#         newStr = ""
#         for s in strs:
#             newStr += "#" + str(len(s)) + s

#         return newStr

#     """
#     @param: str: A string
#     @return: decodes a single string to a list of strings
#     """
#     def decode(self, str):
#         # write your code here
#         decodedString = []

#         # for i in range(0, len(str), ):
#         #     if str[i] == "#":
#         #         start = i + 2
#         #         end = i + 2 + int(str[i+1])
#         #         decodedString.append(str[start:end])
#         #     i += end
#         i = 0
#         while i < len(str):
#             if str[i] == "#":
#                 start = i + 2
#                 end = i + 2 + int(str[i+1])
#                 decodedString.append(str[start:end])
#             i = end
#         return decodedString
    

# newSolution = Solution()
# print(newSolution.encode(["lin#t","code","l#ove","you"]))
# print(newSolution.decode("#5lin#t#4code#5l#ove#3you"))

newSolution = Solution()
print(newSolution.encode(["we", "say", ":", "yes"]))
print(newSolution.decode(newSolution.encode(["we", "say", ":", "yes"])))