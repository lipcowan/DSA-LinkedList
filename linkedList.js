class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head;

        if (!this.head){
            throw new Error(`linked list doesn't exist`);
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode; // should this be currNode.value - since we're looking for the item not the node?
    }

    remove(item) {
        if (!this.head) {
            throw new Error(`linked list doesn't exist`)
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return; // doesn't explicitly delete, removes reference
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.error(`Item not found`);
            return;
        }

        previousNode.next = currNode.next // skipping over the node with the item, removing reference
    }

}