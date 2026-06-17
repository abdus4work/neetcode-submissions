class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mp:Record<string,number>={}
        const freqArr:number[][] = Array.from({length:nums.length+1},()=>[])
        for (let n of nums){
            mp[n]=(mp[n] || 0)+1
        }
        for (let key in mp){
            freqArr[mp[key]].push(parseInt(key))
        }
        const res = []
        for (let i=freqArr.length-1;i>0;i--){
            for(const n of freqArr[i]){
                res.push(n)
                if (res.length==k) return res;
            }
        }
    }
}
