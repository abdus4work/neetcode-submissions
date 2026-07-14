class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = []
        let mp = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        for (let i = 0;i<s.length;i++){
            if(mp[s[i]]){
                if(stack[stack.length-1]===mp[s[i]]){
                    stack.pop()
                }else{
                    return false;
                }
            }
            else{
                stack.push(s[i])
            }
        }
        return stack.length===0;
    }
}
