class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const threeSums = {};
        for (let i = 0; i <= nums.length; i++) {
            for (let j = i+1; j <= nums.length; j++) {
                for (let k = j+1; k <= nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const sortedNums = [nums[i], nums[j], nums[k]].sort();
                        threeSums[`${sortedNums}`] = sortedNums;
                    }
                }
            }
        }
        return Object.values(threeSums);
    }
}
