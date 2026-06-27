class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixProd:number[] = []
        let suffixProd:number[] = []
        let j = nums.length-1
        for(let i =0;i<nums.length;i++){
            
            if(i==0){
                prefixProd[i]=1;
                suffixProd[j]=1;
            }else{
            prefixProd[i]=nums[i-1]*prefixProd[i-1]
            suffixProd[j]=nums[j+1]*suffixProd[j+1]
            }
            j--;
        }
        for(let i=0;i<nums.length;i++){
            nums[i]=prefixProd[i]*suffixProd[i]
        }
        return nums
    }
}
