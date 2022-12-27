for (var i = 1; i < 20; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

var items = ['bag', 'pen', 'money', 'cap', 'mouse'];

for (let i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'cap') {
        break;
    }
    console.log(item);
}

var numbers = [21, 63, 25, 118, 56, 98, 46, 646, 45, 35, 6];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number >= 100) {
        break;
    }
    console.log(number);
}
