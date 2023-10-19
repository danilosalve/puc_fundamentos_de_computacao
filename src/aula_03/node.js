class Node {
    element
    next;
    constructor(element) {
        this.element = element
        this.next = null;
    }
}

class LinkedList {
    count = 0;
    header;
    tail;

    constructor(){
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    addElement(element) {
        if (this.count === 0) {
            this.header = this.tail = element;
        } else {
            this.tail.next = element;
            this.tail = element
        }
        this.count++;
    }

    print(){
        var aux = this.header;
        while(aux !== null) {
            console.log(aux.element);
            aux = aux.next;
        }
    }
}

var myll = new LinkedList();

myll.addElement(new Node(1));
myll.print();

myll.addElement(new Node(2));
myll.print();

myll.addElement(new Node(3));
myll.print();

myll.addElement(new Node(4));
myll.print();