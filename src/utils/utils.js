// Classes

export class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[-${this.key}: ${this.value}]`;
  }
}

// Constants

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

export const DOES_NOT_EXIST = -1;

//  Functions

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return "Null";
  }
  if (item === undefined) {
    return "Undefined";
  }
  if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
