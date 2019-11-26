



// function that takes in a string as an argument.  Store return value in variable.  Log string + return value.  Add if statement// 
const favoriteDogBreed = (dogBreed) => {
  let myFavoriteDogBreed = "";
  if (dogBreed == "meow") {
    return "I like cats."
  } else { return `my favorite dog breed is ${dogBreed}.`; }
}
const myFavoriteDogBreed = favoriteDogBreed("Chow");

console.log(`When it comes to pets, ${myFavoriteDogBreed}`)



const add = (numTwo, numOne, numThree) => {
  return numOne + numTwo + numThree
}
console.log(add(17, 4, 11))



const go = (direction, speed) => {
  let moving = `The car is moving ${direction} at ${speed} mph.`

  if (speed > 75) {
    moving += ` SLOW DOWN!`
  }
  return moving
}

console.log(go("forward", 80))



// const evenOrOdd = (num) => {
//   if ((num % 2) === 0) {
//     return "Even";
//   } else { return "Odd" }
// }

// const numArray = [2, 6, 7, 0, 9, 4];

// for (let n of numArray) {
//   console.log(evenOrOdd(n))
// };


// take in an array, iterate over the array, console log odd/even for each number
const evenOrOdd = (numArray) => {
  for (let num of numArray) {
    if ((num % 2) === 0) {
      console.log("Even")
    } else {
      console.log("Odd")
    }
  }
}
const arrayOfNumbers = [2, 6, 7, 0, 9, 4];

evenOrOdd(arrayOfNumbers)




// Use double functions to convert an array of words into a sentence, not including some words of the array (start with the letter "k"//

const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"]

/*
    Function to filter out `k` words
 */
const arrFilter = (arr) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!element.startsWith("k")) {
      newArr.push(element)
    }
  }
  return newArr
}

/*
    Function to build a single string from the array
    
 */
const joinedArray = (newArr) => {

  return newArr.join(" ");
}

/*
    Invoke the filtering function and store its return value
 */
let filteredArr = arrFilter(words)

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
console.log(joinedArray(filteredArr));


// Use Math.random to predict the chances of catching a fish

const catchChance = () => {
  let num = Math.random() * 2
  if (num < 0.66) {
    return 'Sven hooked a tuna! :)';
  } else {
    return 'Sven came up empty-handed. :('
  }
}

console.log(catchChance());


// Write a function that returns an object that represents a fast food meal. The customer will be able to order a sandwich, a side item (like fries or apples), a drink, and a dessert. Your function should take all of those externally defined values as input (i.e. parameters) and then return an object.

let order = (sandwich, side, drink, dessert) => {
  let newMeal = {
    sandwich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert
  }
  return newMeal;
}
console.log(order('hamburger', `fries`, `coke`, `cookie`));

