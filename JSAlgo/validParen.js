/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
    // create a stack that holds open only 
    let stack = [];
    // map with close to open
    let closeToOpen = { '}' : '{', ']' : '[', ')': '(' };

    for(let i = 0; i < s.length; i++) {
        //close and stack has matching close
        if (s[i] in closeToOpen) {
            if (stack[stack.length - 1] !== closeToOpen[s[i]] || stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        } else { // else push into stack
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
    
};

console.log(isValid("()[]{}"))