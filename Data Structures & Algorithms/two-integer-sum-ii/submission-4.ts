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
            if(mp.has(remain)){
                return [mp.get(remain),i+1]
            }
            mp.set(numbers[i],i+1)
        }
        return []
    }
    
}
