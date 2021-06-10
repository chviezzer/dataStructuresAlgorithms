//to create the class to represent a queue    

export class Queue {
    constructor() {
      this.count = 0; 
      this.lowestCount = 0;  // variable to track the first element
      this.items = {};  
    };
    
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    };

    dequeue() {
        if (this.isEmpty()) {
          return undefined;
        }
        const result = this.items[this.lowestCount]; // store the value from the front of the queue 
        delete this.items[this.lowestCount];  
        this.lowestCount++;  
        return result;  
    };
    // to know what the front element of the queue
    peek() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.lowestCount];
    };
    // check if the queue is empty and its size
    size() {
        return this.count - this.lowestCount;
    };
    isEmpty() {
        return this.size() === 0;
    };
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    toString() {
        if (this.isEmpty()) {
          return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
    };
  };


// creating the Deque class

export class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    //  adds a new element at the front of the deque
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i -1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    };
    // adds a new element at the back of the deque
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    };
    // removes the first element from the deque
    removeFront(){
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    // removes the last element from the deque
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    // returns the first element from the deque
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    // returns the last element from the deque
    peekBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count - 1];
    };
    
      isEmpty() {
        return this.size() === 0;
    };
    
      clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    
      size() {
        return this.count - this.lowestCount;
    };
    
      toString() {
        if (this.isEmpty()) {
          return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
    };
};


