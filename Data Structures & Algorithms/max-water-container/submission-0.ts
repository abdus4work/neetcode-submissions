class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;
        for(let i=0;i<heights.length-1;i++){
            for(let j=i+1;j<heights.length;j++){
                let smallestBar = Math.min(heights[i],heights[j])
                
                let containerVolume = (j-i)*smallestBar;
                res=Math.max(res,containerVolume)
            }
        }
        return res;
    }
}
