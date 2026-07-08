class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    const threeSums = {};
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
      let k = nums.length - 1;
      let j = i + 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          const key = [nums[i], nums[j], nums[k]];
          threeSums[`${key}`] = key;
          j++
        }
        if (sum < 0) {
          j++;
        }
        if (sum > 0) k--;
      }
    }
    return Object.values(threeSums);
  }
}
