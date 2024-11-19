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

    isEmpty() {
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

    listHead() {
      return this.head;
    }

    tail() {
        let curr = this.head;
           while (curr.next) {
            curr = curr.next;
           }
        return curr;
    }

    at(index) {
        let current = this.head;
        let currentIndex = 0;

        while (current !== null) {
            if (currentIndex === index) {
                return current;  // Return the node at the specified index
            }
            current = current.next;
            currentIndex++;
        }
        return null;  // Return null if index is out of bounds
    }

    pop() {
        if (!this.head) {
            return null;  // If the list is empty, return null
        }

        if (!this.head.next) {
            const lastNode = this.head;  // If there's only one node
            this.head = null;  // Remove the last node
            return lastNode;  // Return the removed node
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;  // Traverse to the second-to-last node
        }

        const lastNode = current.next;  // The last node to be removed
        current.next = null;  // Remove the last node
        this.size--; //Reduce the size of the list
        return lastNode;  // Return the removed node
    }

    contains(value) {
        if(this.isEmpty()) {
            return false;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
            i++;
        }
        return false;
    }

    find(value) {
        if(this.isEmpty()) {
            return null;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return null;
    }
    
    toString() {
        if (this.isEmpty()) {
            console.log("List is Empty!");
        }else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `(${curr.value}) -> `;
                curr = curr.next;              

            }
            listValues += "null";
            console.log(listValues);
        }
    }

    insertAt(value, index){
        if(index < 0 || index > this.size) {
            return
        }

        if(index === 0){
            this.prepend(value)
        }else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev = prev.next;                
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }        
    }

    removeAt(index){
        if(index < 0 || index >= this.size) {
            return null;
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next
        }else {
            let prev = this.head
            for(let i = 0; i< index - 1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

}

//Test
const list = new LinkedList();
console.log("Is list empty?", list.isEmpty());
console.log("Size of the List", list.getSize());

list.toString();
list.prepend(10);
list.toString();
list.prepend(20);
list.toString();
list.prepend(30);
list.toString();
list.removeAt(1);
list.toString();
list.append(40);
list.toString();
list.append(50);
list.append(60);
list.toString();
console.log("Size of the List", list.getSize());
list.insertAt(11, 0)
list.toString();
list.insertAt(21, 1);
list.toString();

list.insertAt(100, -1)
list.toString();

list.insertAt(121, 7)
list.toString();

list.insertAt(61, 2)
list.toString();











