// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     console.log(a[index])
// }

// find(6);

// find(12);

// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     return function (index) {
//         console.log(a[index])
//     }
// }

// const closure = find();
// closure(6);
// closure(50);

// function a() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i) // What is logged?
//         }, i * 1000)
//     }
// }

// a();

// let view;
// function likeTheVideo() {
//     let called = 0;

//     return function () {
//         if (called > 0) {
//             console.log("Already Subscribed to Roadside Coder");
//         }   else {
//             view = "Roadside Coder";
//             console.log("Subscribe to", view);
//             called++;
//         }

//     };
// }

// let isSubscribed = likeTheVideo();

// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();


/* LINKED LIST */

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  this.head = new ListNode(val, this.head);
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new ListNode(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let newNode = new ListNode(val, current.next);
    current.next = newNode;
    this.size++;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
};

// var myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1); // List: 1
// myLinkedList.addAtTail(3); // List: 1 -> 3
// myLinkedList.addAtIndex(1, 2); // List: 1 -> 2 -> 3
// console.log(myLinkedList.get(0)); // Should return 1
// console.log(myLinkedList.get(1)); // Should return 2
// console.log(myLinkedList.get(2)); // Should return 3
// myLinkedList.deleteAtIndex(1); // List: 1 -> 3
// console.log(myLinkedList.get(1)); // Should return 3
// myLinkedList.deleteAtIndex(0); // List: 3
// console.log(myLinkedList.get(0)); // Should return 3
// myLinkedList.addAtHead(5); // List: 5 -> 3
// myLinkedList.addAtTail(6); // List: 5 -> 3 -> 6
// console.log(myLinkedList.get(0)); // Should return 5
// console.log(myLinkedList.get(1)); // Should return 3
// console.log(myLinkedList.get(2)); // Should return 6

/* TWO POINTER METHOD */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
    if (slow === fast) {
        return true;
    }
  }

  return false;
};

var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;

    // Phase 1: Detecting the cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // Cycle detected
            break;
        }
    }

    // Check if the loop exited because a cycle was detected
    if (!fast || !fast.next) {
        return null; // No cycle
    }

    // Phase 2: Finding the start of the cycle
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // Both pointers meet at the start of the cycle
};


// Create a list with a cycle: 1 -> 2 -> 3 -> 2 ...
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node2; // Creating a cycle here

// Create a list without a cycle: 1 -> 2 -> 3
let node4 = new ListNode(1);
let node5 = new ListNode(2);
let node6 = new ListNode(3);
node4.next = node5;
node5.next = node6;

console.log(hasCycle(node1)); // Should output: true (cycle exists)
console.log(hasCycle(node4)); // Should output: false (no cycle)



var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;

    let pointerA = headA;
    let pointerB = headB;

    // Continue traversing until the two pointers meet or both become null
    while (pointerA !== pointerB) {
        // If pointerA reaches the end of list A, switch to headB
        // Otherwise, move to the next node
        pointerA = pointerA === null ? headB : pointerA.next;

        // If pointerB reaches the end of list B, switch to headA
        // Otherwise, move to the next node
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    // Return either pointer (A or B), as they are now both at the intersection or null
    return pointerA;
};

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // If fast is null after moving n steps, the head is the node to remove
    if (fast === null) {
        return head.next;
    }

    // Move both pointers until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from the end
    slow.next = slow.next.next;

    return head;
};