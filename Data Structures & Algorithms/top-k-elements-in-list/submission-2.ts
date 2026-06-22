class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mp:Record<string,number>={}
        const freqArr = new Array(nums.length+1)
        for (let n of nums){
            mp[n]=(mp[n] || 0)+1
        }
        for (let key in mp){
            freqArr[mp[key]]=key
        }
        console.log(freqArr[5])
        const res = []
        for (let i=freqArr.length-1;i>0;i--){
            if(freqArr[i] ){
                res.push(freqArr[i])
                if(res.length===k) return res
            }
        }
    }
}
