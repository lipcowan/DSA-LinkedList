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

    insertBefore(item, nodeVal) {
        let currNode = this.head;
        let prevNode = this.head;
        let newNode = null;
        if (currNode.value === nodeVal) {
            return this.insertFirst(item)
        }
        while (currNode.next !== null) {
            prevNode = currNode;
            currNode = currNode.next;
            if(currNode.value === nodeVal) {
                newNode = new _Node(item, currNode);
                prevNode.next = newNode;
            }
        }

    }
    

    insertAt(item, index) {

    }

    insertAfter(item, nodeVal) {

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

//// exterior functions for exercises


// - create main list for examples
function main(items) {

    createSLL = (items) => {
        ///cycle through array of items and add them to linked list

        if (!items){
            throw new Error(`please include an array of items`)
        }

        // create new instance of linkedlist class and map through items array
        list = new LinkedList;
        items.map(item => {
            list.insertLast(item)
        })
        return list;
    }

    createSLL(items);

    return list;
}

function display(list) {
    let tempNode = list.head;
   while  (tempNode.next !== null){
        console.log(`${tempNode.value}
        Next: ${tempNode.next.value}`);
        tempNode = tempNode.next;
    }
    console.log(tempNode.value);
    console.log('END')
}

function addItem(item, list) {
    list.insertLast(item);
    console.log(`***** Added item: ${item}`);
    display(list);
}

function removeItem(item, list) {
    list.remove(item);
    console.log(`***** Removed item: ${item}`);
    display(list);
}

function insertPrior(item, refVal, list) {
    list.insertBefore(item, refVal);
    console.log(`*********** Inserted ${item} before ${refVal}`);
    display(list);
}


//////// working on exercises ..... 

let items = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];

let starterList = main(items);

display(starterList);

addItem("Tauhida", starterList);

addItem("squirrel", starterList);

removeItem("squirrel", starterList);

insertPrior("Athena", "Boomer", starterList);



