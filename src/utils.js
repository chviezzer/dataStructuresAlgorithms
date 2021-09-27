// Classes

export class Node {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined
    }
    toString() {
        return `${this.key}`;
    }
};

export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[-${this.key}: ${this.value}]`
    }
};

//  Functions

export function defaultEquals(a, b) {
    return a === b;
};

export function defaultToString(item) {
    if (item === null) {
        return 'Null';
    } if (item === undefined) {
        return 'Undefined';
    } if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
};