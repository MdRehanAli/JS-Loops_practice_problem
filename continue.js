for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

var numbers = [16, 52, 45, 165, 56, 98, 125, 45];

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 100){
        continue;
    }
    console.log(number);
}