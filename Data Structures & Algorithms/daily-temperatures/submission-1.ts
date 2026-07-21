class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let len = temperatures.length
        let res = new Array(len).fill(0);
        let stack = [];
        for(let i=0;i<len;i++){
            let temp = temperatures[i];
            while(stack.length>0 && temp>stack[stack.length-1][0]){
                let [sElm,sIdx] = stack.pop();
                res[sIdx] = i-sIdx;
            }
            stack.push([temp,i])
        }
        return res;
    }
}
