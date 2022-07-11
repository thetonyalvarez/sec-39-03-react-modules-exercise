import fruit from './foods'
import { choice, remove } from './helpers'

let fruits = fruit();
let desiredFruit = choice(fruits);
let selectedFruit = remove(fruits, desiredFruit)

console.log(`I'd like one ${desiredFruit}, please.`)
console.log(`Here you go: ${selectedFruit}`)
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)
