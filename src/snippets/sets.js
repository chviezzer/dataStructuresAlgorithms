class Set {
    constructor() {
        this.items = {};
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
      };
    add(element) {
        if (!this.has(element)) {
          this.items[element] = element; // {1}
          return true;
        }
        return false;
      };
      delete(element) {
          if (this.has(element)) {
              delete this.items[element];
              return true;
          }
          return false
      };
      clear() {
          this.items = {};
      };
      size() {
          return Object.keys(this.items).length;
      };
      values() {
          return Object.values(this.items);
      };
      union(otherSet) {
          const unionSet = new Set();

          this.values().forEach(value => unionSet.add(value));   // iterate through all elements of the array
          otherSet.values().forEach(value => unionSet.add(value));
          return unionSet;
      }
      intersection(otherSet) {
          // create a new Set instance so that we can return it with the common elements 
          const intersectionSet = new Set();

          const values = this.values();
          for (let i = 0; i < values.length; i++) {   // iterate through all the values of the current instance of the Set class 
              if (otherSet.has(values[i])) {
                  intersectionSet.add(values[i]);   // add it to the created intersectionSet variable
              }
          }
          return intersectionSet;
      }
      difference(otherSet) {
          const differenceSet = new Set();

          this.values().forEach(value => {
              if (!otherSet.has(value)) {
                  differenceSet.add(value);
              }
          });
          return differenceSet;
      }
     isSubsetOf(otherSet) {
         // A subset needs to have less or the same number of elements as the compared set
         if (this.size() > otherSet.size()) {  
             return false;
         }
         let isSubset = true;
         // verify that the element also exists in otherSet
         this.values().every(value => {
             if (!otherSet.has(value)) {
                 isSubset= false;
                 return false;
             }
             return true;
         });
         return isSubset;
     }
}

