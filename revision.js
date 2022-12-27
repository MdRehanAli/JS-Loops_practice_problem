var bottle = 'water';
var bottleColor = 'green';
var sunglassPrice = 120;

var penColor = 'blue';
var isExpensive = true;

var tableItems = ['bottle', 'pen', 'sunglass', 'mouse', 'paper'];

var tableItems3 = tableItems[3];
console.log(tableItems3);
// tableItems[4] 

tableItems[4] = 'Note Khata';
console.log(tableItems);

var newItems = tableItems.indexOf('pen');
console.log(newItems);

// Push pop 

var length = tableItems.length;
console.log(length);
// conditionals 
if (tableItems.length > 5) {
    console.log('Yes, You are right. This array has 4+ items.')
}
else if (tableItems[4] == 'Note Khata') {
    console.log('You are right again.');
}
else {
    console.log('All are wrong.');
}

