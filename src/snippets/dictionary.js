import { defaultToString, ValuePair } from '../utils.js';

export class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;  // transform the key into string
        this.table = {};
    }

    // This method returns true if the key exists in the dictionary and false otherwise.
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    set( key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
      
    get(key) {
    const ValuePair = this.table[this.toStrFn(key)];  //retrieve the object that is stored in the given key property
    return ValuePair == null ? undefined : ValuePair.value;  //If the value pair object exists, then we return its value
    }

    // remove a value from the dictionary
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true
        }
        return false
    }
    values() {
        return this.keyValues().map(ValuePair => ValuePair.value);
    }

    keys() {
        return this.keyValues().map(ValuePair => ValuePair.key);
    }

    keyValues() {
        return Object.values(this.table);
    }
    // keyValues() {
    //     const valuePairs = [];
    //     for (const k in this.table) {
    //         if(this.hasKey(k)) {
    //             valuePairs.push(this.table[k]);
    //         }
    //     }
    //     return valuePairs;
    //}
    
    //allows to iterate each value stored in the data 
    forEach(callback) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callback(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return Object.keys(this.table).length;  //returns how many values are stored in the dictionary
    }

    clear() {
        this.table = {}
    }
    // In case the dictionary is empty, return an empty string
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuesPairs = this.keyValues();
        let objString = `${valuesPairs[0].toString()}`;

        for (let i = 1; i < valuesPairs.length; i++) {
            objString = `${objString}, ${valuesPairs[i].toString}`;
        }
        return objString;
    }
};


