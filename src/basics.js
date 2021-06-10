import { Deque, Queue} from './snippets/queuesDeques.js';


// Just started a idea about .....'s energy levels :P

function energyLevels (levelsList, ev){
    const queue = new Queue();
    const toUpEnergyLevel = [];

    for (let i=0; i < levelsList.length; i++) {
        queue.enqueue(levelsList[i]);   // get a list of energy(ev), and queue all of them
    };
    while (queue.size() > 1) {
        for (let i = 0; i < ev; i++) {
            queue.enqueue(queue.dequeue());  // remove an item from the beginning and add it to the end
        }
        toUpEnergyLevel.push(queue.dequeue());
    };
    return {
        evanescent: toUpEnergyLevel,
        highLevel: queue.dequeue()
    };

    
};

const levels = ['ev1', 'ev2', 'ev3', 'ev4','ev5', 'ev6', 'ev7'];
const result = energyLevels(levels, 7);

result.evanescent.forEach(level => { 
    console.log(`${level} was up form the energy level`);
    
});

console.log(`The final energy level is: ${result.highLevel}`);


// Palindrome checker

function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) {  // verify passed parameter is valid
        return false
    }

    const deque = new Deque();
    // transform all letters to lowercase and we will also remove all the spaces
    const lowerString = aString.toLocaleLowerCase().split('').join('');  
    let stillEqual = true;
    let firstChar;
    let lastChar;
   

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    
    
    
    while (deque.size() > 1 && stillEqual) {   
        firstChar = deque.removeFront();    // remove one element from the front(if palindrome)
        lastChar = deque.removeBack();      // remove one element from the back
        if (firstChar != lastChar) {
            // If the characters do not match, then the string is not a palindrome  
            stillEqual = false
        }
    }
    return stillEqual;
};


// let s = 'madam';
// if (palindromeChecker(s)) {
//     document.write('Yep');
// } else {
//     document.write('Nope');
// }

