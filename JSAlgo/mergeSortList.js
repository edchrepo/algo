// 21. Merge Two Sorted Lists

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to start the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Traverse both lists and merge nodes in sorted order
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach any remaining nodes from list1 or list2
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // Return the merged list starting from the first real node
};
