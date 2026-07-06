class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let alphanum=''
        for(let st of s){
            if((st>='a' && st<='z') || (st>='A' && st<='Z') || (st>='0' && st<='9')){
                alphanum+=st.toLowerCase()
            }
        }
        let j=alphanum.length-1;
        let i=0;
        while(j>i){
            if(alphanum[i]!==alphanum[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}
