class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        let productsWithoutZero = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num == 0) {
                zeroCount++;
                continue;
            }
            productsWithoutZero *= num;
        }
        if (zeroCount > 1) return new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                nums[i] = productsWithoutZero;
                continue;
            }else if(zeroCount>0){
                nums[i]=0;
            }else{
            nums[i] = productsWithoutZero / nums[i];
            }
        }
        return nums;
    }
}
