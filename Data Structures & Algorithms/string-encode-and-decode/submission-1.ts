class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const delimiter='∑';
        let encodedStr=''
        for(let str of strs){
            for(let ch of str){
                encodedStr+=ch
            }
            encodedStr+=delimiter
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const delimiter='∑';
        const decodedArr=[]
        const strLen = str.length
        let decodedStr=''
        for (let i=0;i<strLen;i++){
            if(str[i]==delimiter) {
                decodedArr.push(decodedStr)
                decodedStr=''
                continue
            }
            decodedStr+=str[i]
        }
        return decodedArr
    }
}
