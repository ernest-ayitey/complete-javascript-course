// let js = "amaizing";
// console.log(48 +43+ 33+11);

// let firstName = 'jonas';
// console.log(firstName)

//primitive data types 
   // strings let age = 23;
   // boolean let fullname = 'Jonas';
   // Number let fullAge = true;
   // undefine  let children
   //Null 
   // symbol(Es2015)
   // big int

   // let jonas_matilder = "JM";
   // let $function = 27;

   // let person = "jonas";
   // let PI = 3.1415;

   // let myFirstJob = "Coder";
   // let myCurrentJob = "Teacher";

   // console.log(myFirstJob);
   // true;
   // console.log(true);

   // let javascriptIsFun = true;
   // console.log(javascriptIsFun);

   // console.log(typeof true);
   // console.log(typeof 23);
   // console.log(typeof 'Jonas');

   // javascriptIsFun = "Yes!";
   // console.log(javascriptIsFun);

   // //Undefined datatype
   // let year;
   // console.log(year)
   // console.log(typeof year);

   // year = 1992;
   // console.log(typeof year);


   //Math operators
  /* const now = 2037;
   const ageJonas = 2037 - 1991;
   const serah = 2037 - 2020
   console.log(ageJonas, serah)

   console.log(ageJonas * 2, ageJonas / 10,2 ** 3);

   const firstName = 'Jonas';
   const lastName = 'Daivid'
   console.log(firstName + ' ' + lastName);

   //Assignment operators
   let x = 10 + 5; //15
   x += 10; //x= x +10  = 25
   x *=4; //x= x * 4 = 100
   x++; //x = x +1 
   x--;
   x--;
   console.log(x);

   //comparison operator
   console.log(ageJonas > serah); // >,<, >=, <=
   console.log(serah >=18)

   const isFullAge = serah >= 18;
   console.log(now - 1991 > now - 2018) */

   //operator precedence

//    const now = 2037;
//    const ageJonas = 2037 - 1991;
//    const serah = 2037 - 2018;

//    console.log(now - 1991 > now - 2018);
//  console.log(ageJonas-serah);
//   let x,y;
//   x = y = 25-10-5;
//   console.log(x,y)

//   const averageAge = (ageJonas +serah) /2;
//   console.log(averageAge);
//   console.log(ageJonas,serah, averageAge);


// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

////// Template literals
// const firstName = 'jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;
// // Template literals
// const jonas = "I'm" + " "  + firstName + ',a'+" "  + (year - birthYear)+" " + 'years old' + " " + job+ '!';
// console.log(jonas);
// const jonasNew = `"I'm ${firstName}, ${year - birthYear} years old ${job}!"`;
// console.log(jonasNew);

// console.log(`just a regular string.......`);
// console.log('string with \n\ multiple \n\ lines');
// //template literals for multiple lines
// console.log(`String
// multiple 
// lines`)

//IF /ELSE STATEMENTS
// const age = 15;
// const isOldEnough = age >=18;
// if(age >=18){
// console.log('sarah can start driving licence ')
// }else{
//    const yearsLeft = 18 -age;
//    console.log(`sarsh is too you young wait for another ${yearsLeft} years`)
// };
// const birthYear = 1991
// let century;
// if(birthYear <= 2000){
//    century = 20;
// }else{
//    century = 21;
// }
// console.log(century);

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }
// const weight = "";
// if (weight){
//    console.log("wow bad weight")
// }else {
//    console.log("homes sweet home")
// }

/////////Equality operators
// const age = '18';
// if(age ===18) console.log('you just became 18 :D (strict)');
// if(age ==18) console.log('you just became 18 :D (loose)');

// const favorite = prompt('what is your favorite number');
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // 22 === 23 -> FALSE
//    console.log('Cool! 23 is an amzaing number!')
//  } else if (favorite === 7) {
//    console.log('7 is also a cool number')
//  } else if (favorite === 9) {
//    console.log('9 is also a cool number')
//  } else {
//    console.log('Number is not 23 or 7 or 9')
//  }
 

////// LOGICAL
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//   console.log('sarah should drive');
// }else{
//   console.log('someone should drive');
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('arah is able to drive')
// } else {
//   console.log('Someone else should drive......')
// }

// ////////code challenge solution
// /* Write your code below. Good luck! 🙂 */

// const scoreDolphines = (98 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) /3
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas && scoreDolphines >=98){
//     console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphines && scoreKoalas >=98){
//     console.log("Koalas win the trophy");
// }else if (scoreDolphines === scoreKoalas && scoreDolphines >=98 && scoreKoalas >= 98){
//     console.log("Both win the trophy")
// }else{
//     console.log("no one wins the trophy")
// }

// ////// switch Statement
// const day = 'Wednesday';

// switch(day) {
//   case 'Monday':
//   console.log('Plan my course structure');
//   console.log('Go to codding meetup ');
//   break;
//   case "Tuesday":
//   console.log('Prepare theory Videos');
//   break;
//   case "Wednesday":
//     case "Thursday":
//     console.log('Write code examples')
//     break;
//      case "friday":
//       console.log("Record videos");
//       break;
//       case  "saturday":
//         case "Sunday":
//           console.log('Enjoy the weekend');
//           break;
//           default:
//             console.log('Not a valid day!')
// }

// const month = 'Wednesday';
// if (month === 'Monday'){
//   console.log('Plan my course structure');
//   console.log('Go to codding meetup ');
// }else if(month === 'Tuesday'){
//   console.log('Prepare theory Videos');

// }else if(month === 'Wednesday' || month === 'Thursday'){
//   console.log('Write code examples')
// }else if(month === Friday){
//   console.log("Record videos");

// }else if (month === 'Saturday' || month === 'Sunday'){
//   console.log('Enjoy the weekend');
// }else {
//   console.log('Not a valid day!')

// }

// ////////////////////////////////////
// // Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


