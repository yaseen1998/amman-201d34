'use strict';

let userInformation = ['Raneem', 24, '201d34', true];

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

'YES uppercase';
'yes small letter case';

let favFood = prompt('Do like mansaf').toLowerCase();
switch(favFood) {
case 'yes':
  // console.log('yes');
  alert();
  break;
case 'no':
  // console.log('no');

  break;
default:
  console.log('you have a problem');
  break;
}

let conf = confirm('Are you sure you want to log out');
console.log(conf);
