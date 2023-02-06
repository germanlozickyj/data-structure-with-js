class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top
    }

    pop() {
        if(this.length <= 1) {
            this.top = null
            this.bottom = null
            this.length = 0
            return this
        } else {
            const holdingPointer = this.top.next
            this.top = holdingPointer
            this.length++
            return this
        }
    }

    push(value){
        const newNode = new Node(value)
        if (this.length === 0){
            this.top = newNode 
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
}

const myStack = new Stack()
myStack.push(1)
console.log(myStack)