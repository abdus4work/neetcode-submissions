class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = '';
        for (let str of strs){
            encodedStr+=`${str.length}#${str}`;
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedArr = [];
        let len=0;
        for(let i=0;i<str.length;i++){
            if(str[i]==='#'){
                i++;
                decodedArr.push(str.slice(i,(i+len)))
                i=i+len-1
                len=0;
            }
            else{
                len=(len*10)+parseInt(str[i],10);
            }
        }
        return decodedArr;
    }
}
