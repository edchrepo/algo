# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Example 1:
# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev, curr = None, head

        while curr:
            temp = curr.next
            curr.next = prev
            # set prev to modified curr
            prev = curr
            curr = temp
        return prev

x = ListNode(1)
x.next = ListNode(2)
x.next.next = ListNode(3)
x.next.next.next = ListNode(4)
x.next.next.next.next = ListNode(5)
newSolution = Solution()
print(newSolution.reverseList(x))

# prev = None
# curr = 1 -> 2 -> 3 -> 4 -> 5
# curr.next = prev (1's next points to -> None)
# temp = 2 -> 3 -> 4 -> 5

# prev = 1 -> None
# curr = 2 -> 3 -> 4 -> 5
# curr.next = prev (2's next points to 1 -> None )
# temp = 3 -> 4 -> 5

# prev = 2 -> 1 -> None
# curr = 3 -> 4 -> 5
# temp = 4 -> 5

# prev = 3 -> 2 -> 1 -> None
# curr = 4 -> 5
# temp = 5

# prev = 4 -> 3 -> 2 -> 1 -> None
# curr = 5
# temp = None

# prev = 5 -> 4 -> 3 -> 2 -> 1 -> None
# curr = None
# temp = None
