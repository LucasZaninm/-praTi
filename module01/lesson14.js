class Node {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0

    }

    add(data) {
        let newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode

        }
        this.size++
    }
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return console.log("index fora dos limites")
        }

        let newNode = new Node(data)
        let current = this.head
        let previous 

        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }

    }

    printList() { 

        let current = this.head
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}


let list = new LinkedList()

list.add("formação +praTi")
list.add(true)
list.add("elemento 3")
list.printList()
list.insertAt("")


