class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = [];
        for(let i=0;i<nums.length;i++){
            arr.push([nums[i],i]);
        }

        arr.sort((a,b)=>a[0]-b[0]);
        console.log(arr)
        let i=0, j=nums.length-1;
        while(i<j){
            let sum = arr[i][0]+arr[j][0];
            if(sum==target) return [Math.min(arr[i][1],arr[j][1]),Math.max(arr[i][1],arr[j][1])];
            else if( sum<target)i++;
            else j--;
        }
        
        return [-1,-1]

    }
}
