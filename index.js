// CONTROL FLOW

// Introduction
// For this assignment, you will develop a simple program that generates recommendations based on a set of input data and several conditions. As you continue adding tools to your programming toolkit, these types of logic problems will become easier to solve, and your code will become more efficient.

// TODO:
// Implement control flow using conditionals and control flow keywords.
// Create a program that executes based on conditional logic.

// PART 1: Growing Pains


const PI = 3.1415;
const radius = 5;
const area = (PI * radius * radius).toFixed(3); // 78.5375

const spacePerPlant = 0.8;
let numberOfPlants = 20;

// Each week the amount of plants doubles.
// multiply previous week by 2

//! how much of the garden is being taken up in each week? 
// Start at 20 plants taking up 0.8 square meters each = initial amount of space taken 
// "numberOfPlants * spacePerPlant"
let initialOccupiedSpace = numberOfPlants * spacePerPlant;
console.log(initialOccupiedSpace); // 16

//! what is the portion of the garden it takes up in the initial week?
// (numberOfPlants * spacePerPlant)/area = percent in decimals.
let week0Area = ((numberOfPlants * spacePerPlant) / area).toFixed(3);
//multiply by 100 to get %
let week0PercentOfTotalArea = week0Area * 100;
console.log(`To start the garden (week 0), there are ${numberOfPlants} plants, which take up ${initialOccupiedSpace} square meters out of ${area} square meters of inital space. This is ${week0PercentOfTotalArea}% of the garden.`)

// week1 = number of plants that are in the garden at 1 week.
let week1 = numberOfPlants * 2;
let week1Area = (week0PercentOfTotalArea * 2);
console.log(`At week 1, there are ${week1} plants which take up ${week1Area}% of the garden.`)

// week2 = number of plants that are in the garden at 2 weeks.
let week2 = week1 * 2;
let week2Area = (week0PercentOfTotalArea * 2 * 2);

console.log(`At week 2, there are ${week2} plants which take up ${week2Area}% of the garden.`)

// week3 = number of plants that are in the garden at 3 weeks.
let week3 = week2 * 2;
let week3Area = week0PercentOfTotalArea * 2* 2 * 2;

console.log(`At week 3, there are ${week3} plants which take up ${week3Area}% of the garden.`)

//dividing line to make console more readable
console.log("---------------------------");

//! Implement control flow to make decisions on whether the plants should be:
//? Pruned (if greater than 80% of the maximum capacity of the garden)
// if (Occupied garden area > 80%) {
// console.log("Prune plants to stop them from exceeding the capacity of the garden.");

//? Monitored (if the plant count is between 50% and 80% of the maximum capacity of the garden)
// } else if (Occupied garden area > 50% && Occupied garden area < 80%){
// console.log("Monitor plants to see if they are growing at an acceptable rate.");

//? Planted (if the plant count is less than 50% of the maximum capacity of the garden.)
// } else {
//     console.log("Plant more. There is room to plant more plants.")
//    }

//week 0
//  Reminder: week0PercentOfTotalArea
if (week0PercentOfTotalArea > 80) {
    console.log("Week 0 instructions: Prune plants to stop them from exceeding the capacity of the garden.");
} else if ((week0PercentOfTotalArea > 50) && (week0PercentOfTotalArea < 80)) {
    console.log("Week 0 instructions: Monitor plants to see if they are growing at an acceptable rate.");
} else {
        console.log("Week 0 instructions: Plant more. There is room to plant more plants.")
       }

//week 1
// Reminder: week1Area = (week0PercentOfTotalArea * 2)

if (week1Area > 80){
    console.log("Week 1 instructions: Prune plants to stop them from exceeding the capacity of the garden.");
} else if ((week1Area > 50) && (week1Area < 80)) {
    console.log("Week 1 instructions: Monitor plants to see if they are growing at an acceptable rate.");
    } else {
            console.log("Week 1 instructions: Plant more. There is room to plant more plants.")
           }

//week 2
// Reminder: week2Area = (week0PercentOfTotalArea * 2 * 2)

if (week2Area > 80){
    console.log("Week 2 instructions: Prune plants to stop them from exceeding the capacity of the garden.");
} else if ((week2Area > 50) && (week2Area < 80)) {
    console.log("Week 2 instructions: Monitor plants to see if they are growing at an acceptable rate.");
} else {
        console.log("Week 2 instructions: Plant more. There is room to plant more plants.")
       }

//week 3
// Reminder: week3Area = week0PercentOfTotalArea * 2* 2 * 2

if (week3Area > 80){
    console.log("Week 3 instructions: Prune plants to stop them from exceeding the capacity of the garden.");
} else if ((week3Area > 50) && (week3Area < 80)){
    console.log("Week 3 instructions: Monitor plants to see if they are growing at an acceptable rate.");
} else {
    console.log("Week 3 instructions: Plant more. There is room to plant more plants.")
   }


//dividing line to make console more readable
console.log("---------------------------");

// PART 2 
//! How much additional space would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

// First we find out how many plants that would be.
let numberOfPlant = 100;

let week10 = (numberOfPlant * 2) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;

// This automatically add commas to a number
// Intl.NumberFormat() --> used for more control
const formatter = new Intl.NumberFormat('en-US');
console.log(`If scientists started with ${numberOfPlant} plants, a week 10 there would be ${formatter.format(week10)} plants.`);

// Next we figure out how much space is needed for that many plants. 
let week10AreaNeeded = week10 * spacePerPlant;
console.log(`For those ${formatter.format(week10)} plants, ${formatter.format(week10AreaNeeded)} square meters of garden space would be needed.`)

//! If the space remained circular, what would be the radius of this expanded garden?

// radius = √(area / π)
radius100 = Math.sqrt(week10AreaNeeded / Math.PI).toFixed(3) ;
console.log(`The radius of the expanded garden would be: ${radius100}.`)

// ANOTHER OPTION WOULD BE TO USE A FUNCTION:
function findRadius(area) {
    // The formula for the area of a circle is A = πr^2
    // To find the radius, we can rearrange the formula: r = √(A / π)
  
    const radius = Math.sqrt(area / Math.PI);
    return radius;}

    // PART 3
    // The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden. 
    //
    // Use "try and catch" to wrap your work in an error-handling block.
        
    // If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

    //  ORIGINAL RADIUS of 5 -- 100 plants

   // Calculate the total area required for the plants (as before).
   week10AreaNeeded // area needed for 100 plants after 10 weeks
// Compare the required area to the original garden’s capacity.
area // original area
// If the required area exceeds the garden’s capacity, throw an error.
week10AreaNeeded>area // what to compare
// Catch the error and log an appropriate message.
// week10Area

try{
    if(week10AreaNeeded>area) throw "Not enough space";
} 
// catch only happens when the try block is thrown
// if throw happens, catch happens. 
catch(err) {
    console.log("You do not have enough space in the garden. ")
}