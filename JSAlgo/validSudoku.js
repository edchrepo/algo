// https://leetcode.com/problems/valid-sudoku/description/

// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 
var isValidSudoku = function(board) {
    // Helper function to check if an array contains duplicates
    const isValidGroup = (group) => {
        const seen = new Set();
        for (const value of group) {
            if (value === ".") continue; // Ignore empty cells
            if (seen.has(value)) return false;
            seen.add(value);
        }
        return true;
    };

    // Check all rows
    for (let row = 0; row < 9; row++) {
        if (!isValidGroup(board[row])) return false;
    }

    // Check all columns
    for (let col = 0; col < 9; col++) {
        const column = [];
        for (let row = 0; row < 9; row++) {
            column.push(board[row][col]);
        }
        if (!isValidGroup(column)) return false;
    }

    // Check all 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const box = [];
            for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
                for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
                    box.push(board[row][col]);
                }
            }
            if (!isValidGroup(box)) return false;
        }
    }

    return true; // All checks passed
};


// var isValidSudoku = function(board) {
//     const cols = new Map(); // Map for columns
//     const rows = new Map(); // Map for rows
//     const squares = new Map(); // Map for 3x3 squares (key = `${Math.floor(r/3)}-${Math.floor(c/3)}`)

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             const value = board[r][c];
//             if (value === ".") continue; // Skip empty cells

//             const squareKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

//             // Initialize sets if not already created
//             if (!rows.has(r)) rows.set(r, new Set());
//             if (!cols.has(c)) cols.set(c, new Set());
//             if (!squares.has(squareKey)) squares.set(squareKey, new Set());

//             // Check for duplicates
//             if (rows.get(r).has(value) || cols.get(c).has(value) || squares.get(squareKey).has(value)) {
//                 return false;
//             }

//             // Add value to the appropriate sets
//             rows.get(r).add(value);
//             cols.get(c).add(value);
//             squares.get(squareKey).add(value);
//         }
//     }

//     return true; // All checks passed
// };




// Example usage:
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board)); // Output: true
