class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let mp = new Map();
        for(let i=0;i<numbers.length;i++){
            let remain = target-numbers[i]
            mp.set(remain,i+1)
        }
        console.log(mp)
        for(let k of mp.keys()){
            let remain = target - k
            let num1=mp.get(k);
            let num2=mp.get(remain)
            if(mp.has(remain)){
                return [Math.min(num1,num2),Math.max(num1,num2)]
            }
            console.log(k)
        }
        return []
    }
    
}
