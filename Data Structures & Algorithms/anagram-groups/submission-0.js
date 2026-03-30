class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();

        for (let str of strs){
            let sortedStr = str.split('').sort().join('');
            if(!res.has(sortedStr)){
                res.set(sortedStr,[])
            }
            res.get(sortedStr).push(str);
        }
        return Array.from(res.values())
    }
}
