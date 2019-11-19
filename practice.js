// const calculateAgeInDogYears = (ageOfPerson) => {
//   const ageInDogYears = ageOfPerson / 7
//   return ageInDogYears;
// }

// const dogAge = (calculateAgeInDogYears(22))

// console.log(dogAge)



// const favoriteDogBreed = (dogBreed) => {
//   if (dogBreed == "meow") {
//     return "I like cats."
//   } else { return `My favorite dog breed is ${dogBreed}.`; }
// }
// const myFavoriteDogBreed = favoriteDogBreed("Chow");

// console.log(`When it comes to pets, ${myFavoriteDogBreed}`)



// const add = (numTwo, numOne, numThree) => {
//   return numOne + numTwo + numThree
// }
// console.log(add(17, 4, 11))



// const go = (direction, speed) => {
//   let moving = `The car is moving ${direction} at ${speed} mph.`

//   if (speed > 75) {
//     moving += ` SLOW DOWN!`
//   }
//   return moving
// }

// console.log(go("forward", 80))



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

