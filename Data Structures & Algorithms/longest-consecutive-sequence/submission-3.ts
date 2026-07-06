class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0;
        nums.sort((a, b) => a - b);
        let longestLength = 1;

            console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let next = nums[i + 1];
            if (curr == next) continue;
            if (curr + 1 == next) {
                longestLength++;
            } else {
                res = Math.max(res, longestLength);

                longestLength = 1;
            }
            res = Math.max(res, longestLength);
            console.log(res,longestLength)
        }
        return res;
    }
}
