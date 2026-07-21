class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = []
            for (let i = 0; i < tokens.length; i++) {
                if ("+-*/".includes(tokens[i])) {
                    const b = parseInt(stack.pop());
                    const a = parseInt(stack.pop());
                    let result;
                    switch (tokens[i]) {
                        case "+":
                            result = a + b;
                            break;
                        case "-":
                            result = a - b;
                            break;
                        case "*":
                            result = a * b;
                            break;
                        case "/":
                            result = Math.trunc(a / b);
                            break;
                    }
                    stack.push(result)
                }else{
                    stack.push(parseInt(tokens[i]))
                }
                console.log(stack)
            
        }
        return stack.pop()
    }
}
