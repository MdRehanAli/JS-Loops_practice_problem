// problem 1
var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var cost = applePrice + orangePrice;
var remaining = moneyGiven - cost;

console.log(remaining);


// problem 2 

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

var averageMarks = totalMarks / 5;

var averageTwoDecimal = averageMarks.toFixed(2);
console.log(averageTwoDecimal);

// problem 3 

var var1 = 'I am going to be';
var var2 = 'an awesome web developer';

var var3 = var1 + ' ' + var2;

console.log(var3);

// problem 4 

var num1 = 119

var remainder = num1 % 5;

console.log(remainder);

// problem 1 

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);


// problem 2
// grading.js 
// It is remaining in the previous Js folder. Which file name is problem2.js


// problem 3
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}

// problem 4 
// Isosceles 

var sides1 = 9;
var sides2 = 8;
var sides3 = 9;

if (sides1 == sides2 || sides2 == sides3 || sides3 == sides1) {
    console.log('Isosceles.');
}

else {
    console.log('It is not isosceles.');
}


// revision in this chapter 
var num = 1
while (num <= 10) {
    console.log(num);
    num++;
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}
