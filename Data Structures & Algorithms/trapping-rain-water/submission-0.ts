class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res =0;
        let len = height.length;
        for(let i=0;i<len;i++){
            let leftBar = height[i];
            let rightBar = height[i];
            for(let j=0;j<i;j++){
                leftBar=Math.max(leftBar,height[j])
            }
            for(let j = i+0;j<len;j++){
                rightBar=Math.max(rightBar,height[j])
            }
            res+=Math.min(leftBar,rightBar)-height[i]
        }
        return res;
    }
}
