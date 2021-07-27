'use strict';

// let userInformation = ['Raneem', 24, '201d34', true];

//console.log(userInformation[2]);

/*
- Data types
  - Number 1, 2 ,3 ,3.14, -1
  - Bool true false
  - String '' ""

  === check the value and the data type
  == check only for the value
  String == Number

*/

// let userAge = prompt('Please enter your age');
// if(userAge == 18) {
//   alert('You are not  allowed to be here');
// } else {
//   alert('Welcome');
// }

// console.log(typeof userAge);
// console.log(Number('12') + 25);

// 'YES uppercase';
// 'yes small letter case';

// let favFood = prompt('Do like mansaf').toLowerCase();
// switch(favFood) {
// case 'yes':
//   // console.log('yes');
//   alert();
//   break;
// case 'no':
//   // console.log('no');

//   break;
// default:
//   console.log('you have a problem');
//   break;
// }

// let conf = confirm('Are you sure you want to log out');
// console.log(conf);

// let userName = prompt('Please enter  your name ^_^');
// alert(`Welcome ${userName}`);

// let favFood = prompt('Do I like mansaf').toLowerCase();
// switch(favFood) {
// case 'yes':
// case 'y':
//   console.log('Tis is the correct answer', favFood);
//   alert('sure I love mansaf');
//   break;
// case 'no':
// case 'n':
//   console.log('Tis is the not correct answer', favFood);
//   alert('Why not everyone like mansaf');
//   break;
// }

// alert(`Thank you ${userName}, I hope you also like manasaf while I traveling to Jordan`);

// For loop
// While loop
// Logical op.
// Arrays method

let multiValues = ['Diala', 201, 'd34', true, [101, 102], 'Raghad', 'yahia'];

// console.log(multiValues[4][0]);
// console.log(multiValues.length);

// for (let i = 0; i < multiValues.length; i++) {
//   console.log(multiValues[i]);
//   if(multiValues[i] === true) {
//     console.log('we found it');
//   }
// }

/*
OR ||
Not !
And &&
*/

let question = prompt('Please enter yes or no');
// let q = prompt('please enter y');
// if(question === 'yes' && q !== 'y') {
//   console.log('user enter yes');
// }

let counter = 0;

while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n') {
  question = prompt('Please enter yes or no');
}
if(question === 'yes' || question === 'y') {
  counter++;
  alert('correct');
}
console.log(counter);

let userName = prompt('please enter your name');
while(!userName) {
  userName = prompt('please enter your name');
}

