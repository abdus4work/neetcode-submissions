class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result = [];
        for(let i=0;i<temperatures.length;i++){
            let count = 1;
            let j=i+1
            while (j<temperatures.length){
                
                if(temperatures[j]>temperatures[i]) {
                    
                    break;
                };
                count++;
                j++;
            }
            count = j ===temperatures.length? 0:count; // if j hit lenght means there is no warmer day. 
            result.push(count)
        }
        return result;
    }
}
