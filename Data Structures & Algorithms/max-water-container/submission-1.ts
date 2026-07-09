class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;
        let i=0,j=heights.length-1;
            while(i<j){
                let smallestBar = Math.min(heights[i],heights[j])
                let containerVolume = (j-i)*smallestBar;
                res=Math.max(res,containerVolume)
                if(heights[i]<heights[j]){
                    i++
                }else{
                    j--
                }
            }
        return res;
    }
}
