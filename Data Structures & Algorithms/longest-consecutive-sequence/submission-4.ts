class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set(nums);
        let res=0;

        for(let n of nums){
            if(!numsSet.has(n-1)){
                let longestLen = 0;
                let streak = n;
                while(numsSet.has(streak)){
                    longestLen++;
                    streak++
                }
                res=Math.max(res,longestLen)
            }
        }
        return res;
    }
}
