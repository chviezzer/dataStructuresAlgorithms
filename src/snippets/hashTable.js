import { defaultToString, ValuePair } from '../utils.js';


export class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //  lose lose hash
    loloseHashCode(key) {
        if(typeof key === 'number') {   // verify whether k is a numebr
            return key;
        }
        const tableKey = this.toStrFn(key); // transform the k into a string
        let hash = 0;  // ininiatialize the hash if is an object and not string 
        // iterate through each character of the k
        for(let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i); // add the ASCII value to the hash variable
        }
        return hash % 41;
    }
    hashCode(key) {
        return this.loloseHashCode(key);
    }

    // adds a new item to the hash table or update it
    put(key, value) {
        if(key != null && value != null) {                         // verify whether the k and v are valid
            const postition = this.hashCode(key);                 //  find the k parameter position in the table
            this.table[postition] = new ValuePair(key, value);   //   create a instance to finde k
            return true;
        }
        return false;
    }
    // returns a specific value searched by the key
    get(key) {
        const valuePair = this.table[this.hashCode(key)];          // retrieve the position of the given k parameter
        return valuePair == null ? undefined : valuePair.value;   //  access v position from the array 
    }
    // removes the value from the hash table using the key
    remove(key) {
        const hash = this.hashCode(key);         // to know what position access and retrieve the hash 
        const valuePair = this.table[hash];     // retrieve the valuePair stored in the hash position 

        if(valuePair != null) {
            delete this.table[hash];          // remove if is not null or undefined
            return true;
        }
        return false;
    }
    getTable(){
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {}
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for(let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
};