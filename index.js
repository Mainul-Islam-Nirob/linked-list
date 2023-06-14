class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty () {
        return this.size === 0;    
    }

    getSize() {
        return this.size;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;

        }else {
           let prev = this.head;
           while (prev.next) {
            prev = prev.next;
           }
           prev.next = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;

        }else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty!");
        }else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;              

            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log("Is list empty?", list.isEmpty());
console.log("Size of the List", list.getSize());

list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
list.append(40);
list.print();
list.append(50);
list.append(60);
list.print();
console.log("Size of the List", list.getSize());
