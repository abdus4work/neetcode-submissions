class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const res = [];
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    res.push(i + 1);
                    res.push(j + 1);
                    return res;
                }
            }
        }
        return res;
    }
}
