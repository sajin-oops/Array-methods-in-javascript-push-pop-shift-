//ARRAY METHODS
let array = ['a','b','c','d','e']
//PUSH - ADD ELEMENT TO THE END
array.push('f')
console.log(array)
//output - ['a', 'b', 'c', 'd', 'e', 'f']

//POP - remove element from the end and 
//returns removed value
console.log(array.pop())
// - f
console.log(array)
// -  ['a', 'b', 'c', 'd', 'e']

//shift - removes element from start of the array
// and returns removed value
console.log(array.shift())
// returned value is = a
console.log(array)
// output - ['b', 'c', 'd', 'e']
