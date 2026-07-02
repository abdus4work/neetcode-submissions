class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let st = new Set();
        for (let row = 0; row < 9; row++) {
            st.clear();
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === ".") continue;
                if (st.has(board[row][col])) return false;
                st.add(board[row][col]);
            }
        }
        for (let col = 0; col < 9; col++) {
            st.clear();
            for (let row = 0; row < 9; row++) {
                if (board[row][col] === ".") continue;
                if (st.has(board[row][col])) return false;
                st.add(board[row][col]);
            }
        }

        for (let subBoard = 0; subBoard < 9; subBoard++) {
            st.clear();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(subBoard / 3) * 3 + i;
                    let col = (subBoard % 3) * 3 + j;
                    if (board[row][col] === ".") continue;
                    if (st.has(board[row][col])) return false;
                    st.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
