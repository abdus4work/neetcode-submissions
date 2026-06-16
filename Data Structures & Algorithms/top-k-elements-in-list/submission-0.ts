class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mp:Record<string,number> = {};
        for(let n of nums){
            mp[n]=(mp[n] || 0)+1
        }
        const arr:number[][] = Object.entries(mp).map(([n,f])=>[
            f,
            parseInt(n)
        ])
        arr.sort((a,b)=>a[0]-b[0])
        console.log(arr)
        return arr.slice(-k).map(p=>p[1])
        
    }
}
