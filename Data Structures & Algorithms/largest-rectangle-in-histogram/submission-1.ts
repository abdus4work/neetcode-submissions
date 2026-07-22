class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let res=heights[0];
        for(let i=0;i<heights.length;i++){
            let minHeight=heights[i];
            for(let j=i;j<heights.length;j++){
                minHeight=Math.min(minHeight,heights[j]);
                res = Math.max(res,minHeight*(j-i+1))
            }
        }
        return res;
    }
}
