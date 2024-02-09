'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive :D');

////////// FUNCTIONS
// function logger() {
//     console.log('My name is Jonas');
// }
// //calling / running / invoking function
// logger()

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2,7);
// console.log(appleOrangeJuice)

///FUNCTION DECLARATION
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// ////Function Expression
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;

// }
// const age2 =calcAge2(1991)
// console.log(age1, age2);

/////Arrow function
// const calcAge3 = birthYear => 2037-birthYear;
// const Age3 = calcAge3(1991);
// console.log(Age3);

// const yearsUntilRetirement =  birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991))


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// const cutPieces = function(fruit){
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//    const applePieces = cutPieces(apples);
//    const orangesPieces = cutPieces(oranges);
//     const juice = `juice with ${applePieces} piece of apple and ${orangesPieces} pieces of orange.`
//     return juice;
// }
// console.log(fruitProcessor(2,3))

///////Review of Functions 

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years 🎉`);
//         return retirement;

//     }else {
//         console.log(`${firstName} has already retired`);
//         return -1;

//     }
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1971, 'Mike'));


/////coding challenge
/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a,b,c) => (a+b+c)/3;
// console.log((3,4,5));


// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas){
//     if (avgDolphins >= 2* avgKoalas){
//         console.log(`Dolphin win  🏆  (${avgDolphins} vs. ${avgKoalas})`)
//     }else if(avgKoalas >= 2* calcAverage){
//         console.log(`Koalas wins  🏆  (${avgKoalas} vs. ${avgDolphins})`)
//     }else 
//     {
//     console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

////////Arrays 
// const friend1 = "Micheal";
// const friend2 = "Steve";
// const friend3 = "Peter";


// const friends = ["Micheal", 'Steve', "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020)
// console.log(friends[0])
//  console.log(friends[2])

//  console.log(friends.length);
//  console.log(friends[friends.length -1]);;

//  friends[2] = 'Jay';
//  console.log(friends);

//  const firstName = 'Jonas'
//  const jonas = [firstName, 'davids', 2037-1991, 'teacher', friends]

//  console.log(jonas);
//  console.log(jonas.length)



//  //Exercise
//  const calcAge = function (birthYeah){
//     return 2037 - birthYeah;
//  }
//  const years = [1991, 1984, 2008, 2020,2018,2021];
//  console.log(calcAge(years));

//  const age1 = calcAge(years[0]);
//  const age2 = calcAge(years[0]);
//  const age3 = calcAge(years[years.length -1]);
//  console.log(age1,age2,age3);

//  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//  console.log(ages);


// const friends = ["Micheal", 'Steve', "Peter"];
// const newLength = friends.push('Jay');//push method adds elementand it adds to the last word
// console.log(friends);
//  console.log(newLength);

//  friends.unshift('John')// adds to the first 
//  console.log(friends)

//  /////remove element 
//  friends.pop();// remove the last element 
//  const popped  =  friends.pop();

//  console.log(friends);
//  console.log(popped);
//  friends.shift();//removes first word 
//  console.log(friends);

//  console.log(friends.indexOf('steve'))



//  friends.push(23);
// console.log(friends.includes('Steve'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steve')) {
//   console.log('You have a friend called Steven');
// }

/* const calcTip = function (bill){
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

///////Objects
// const jonasArray = [
//    'Jonas',
//    'kwame',
//    2037-1991
//    ['Micheal', 'Peter', 'Steve']
// ];
// const jonas = {
//    firstName: 'Jonas',
//     lastName: 'kwame',
//     age: 2037-1991,
//     friends: ['Micheal', 'Peter', 'Steve'],
//     job: 'Teacher'
// };
// console.log(jonas.lastName)///Dot Notation
// console.log(jonas['firstName'])///Bracket Notation

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// // const
// //  interestIn = prompt('what do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');
// // console.log(jonas[interestIn]);

// // if (jonas[interestIn]){
// //     console.log(jonas[interestIn])
// // }else console.log('wrong request');

// jonas.location = 'Portugal';
// jonas['twitter'] = '@david';
// console.log(jonas);

// console.log(`${jonas.firstName} has
// ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


//////////object methods
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }
//     calcAge: function(){
//         // console.log(this)
//         this.age = 2037 - this.birthYeah;
//         return this.age
//     },
//     getSummary: function(){
//         return `${this.firstName} is ${this.calcAge()} - year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licencse.`
//     }
// };
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   mark.calcBMI();
//   john.calcBMI();
  
//   console.log(mark.bmi, john.bmi);
  
//   // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }

////////////////Looping Arrays, Breaking and Continuing

// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')
// console.log('lifting weight repeatition 1')

// for(let rep = 1; rep <= 10; rep++ ){
//     console.log(`lifting weight repeatition ${rep} `)


// }



// const jonas = [
//    'Jonas',
//    'kwame',
//    2037-1991,
//    'teacher',
//    ['Micheal', 'Peter', 'Steve'],
//    true
   
//  ];

//  const types = [];
// for(let i = 0; i< 5; i++){
//     console.log(jonas[i])
//     types[i]= typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }


// ///////////////////////////////////////
// // Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length -1 ; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


// ///////////////////////////////////////
// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }
// */

// ///////////////////////////////////////
// // Coding Challenge #4

// /*
// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

// GOOD LUCK 😀
// */

// /*
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// */
