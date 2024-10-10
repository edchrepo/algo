// https://leetcode.com/problems/reverse-linked-list/description/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 
// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    let prev = null;  // This will become the new head at the end
    let current = head;  // Start with the current node as head

    while (current !== null) {
        let nextNode = current.next;  // Save the next node
        current.next = prev;  // Reverse the link

        // Move forward in the list
        prev = current;  // The current node becomes the previous
        current = nextNode;  // Move to the next node
    }

    return prev;  // prev will be the new head of the reversed list
};