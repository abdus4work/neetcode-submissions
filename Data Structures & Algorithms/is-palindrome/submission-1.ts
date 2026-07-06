class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let alphanum = ''
        for(let st of s){
            if((st>='a' && st<='z') || (st>='A' && st<='Z') || (st>='0' && st<='9')){
                alphanum+=st.toLowerCase()
            }
        }
        const reverseString = alphanum.split('').reverse().join('')
        console.log(alphanum)
        return alphanum===reverseString;
    }
}
