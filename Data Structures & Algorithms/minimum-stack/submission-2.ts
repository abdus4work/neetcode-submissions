class MinStack {
    stack: number[];
    size: number;
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length > 0) {
            this.minStack.push(Math.min(val, this.minStack[this.size - 1]));
        } else {
            this.minStack.push(val);
        }
        this.stack.push(val);
        this.size++;
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
        this.size--;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.size - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
