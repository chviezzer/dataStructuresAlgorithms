import { defaultEquals, Node } from '../utils.js'

export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    //  adds a new element to the end of the list
    push(element) {
        const node = new Node(element);
        let current;
        
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head
            while(current.next != null) {  // get last item
                current = current.next;
            }
            // assing next to new element to make the link
            current.next = node;
        }
        this.count++;
    }
     // returns the element of a specific position in the list or undefined (if the elemnet doesn't exist)
     getElementAt(index) {
         // check if index passed in a valid position
        if(index >= 0 && index <= this.count) {      
            let node = this.head;
            for(let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    //  inserts a new element at a specified position in the list
    insert(element, position) {
         // check for out-of-bounds values
        if(index >= 0 && index <= this.count) {     
            const node = new Node(element);
            // change the head reference to node and add a new element to the list
            if(index === 0) {                     
                node.next = current;            
                this.head = node;
            // to loop through the list until the desired position
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;      //  to link the new node and the current
                previous.next = node;              
            }
            this.count++;
            return true;
        }
        return false;
    }
       // removes an item from a specified position in the list.
       removeAt(position) {
        if( index >=0 && index < this.count) {
            const node = new Node(element);
            if(index === 0) {                   // removing first item
               this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    // removes an element from the list
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    // returns the index of the element in the list or -1 (if the elemnet doesn't exist)
    indexOf(element) {
        let current = this.head;
        for(let i = 0; i < this.size() && current != null; i++) {
            if(this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    isEmpty(){
        return this.size() === 0;
    }
    // returns the number of elements the linked list contain
    size() {
        return this.count;
    }
    // return the head element 
    getHead() {
        return this.head;
    }
    // returns a string representation of the linked list
    toString() {
        if(this.head == null) {         // if the list is empty return an empty string
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString; 
    }
};