class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    let res=[]
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if(nums[i]>0) break; // because if i is greater than 0 then triplet will not form.
        if(i>0 && nums[i]==nums[i-1]) continue;
      let k = nums.length - 1;
      let j = i + 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          res.push([nums[i],nums[j],nums[k]])
          j++
          k--
          while(j<k && nums[j]===nums[j-1]){
            j++
          }
        }
        if (sum < 0) {
          j++;
        }
        if (sum > 0) k--;
      }
    }
    return res
  }
}
