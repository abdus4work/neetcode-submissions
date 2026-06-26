class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const productsArray = [];

        for(let i=0;i<nums.length;i++){
            let product = 1
            for(let j=0;j<nums.length;j++){
                if(i!==j){
                    product*=nums[j]
                }
            }
            productsArray.push(product)
        }
        return productsArray
    }
}
