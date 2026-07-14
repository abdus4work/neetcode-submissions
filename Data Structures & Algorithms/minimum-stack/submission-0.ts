class MinStack {
    stack:number[];
    size:number;
    constructor() {
        this.stack=[]
        this.size=0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        this.size++;
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.size--;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.size-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = this.stack[this.size-1];
        let temp = [...this.stack];
        while(temp.length>0){
            min=Math.min(min,temp.pop())
        }
        return min;
    }
}
