// Hello, You!
function hello(name) {
  console.log('Hello, ' + name);
}
hello('Mustache');

//Hello, You! Part 2
function hello2(name) {
    if (!name) {
        name = 'world';
    }
    console.log('Hello, ' + name + '!');
}
hello2();
hello2('Jesslyn');

//Madlib
function madlib(name, subject) {
    return name + "'s favorite subject in school is " + subject + '.';
}
console.log(madlib('Jesslyn', 'math'));

//Tip Calculator
function tipAmount(bill, service) {
    if (service == 'good') {
        return tip = bill * .2;
    } else if (service == 'fair') {
        return tip = bill * .15;
    } else if (service == 'bad') {
        return tip = bill * .1;
    } else {
        return 'Invalid input';
    }
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

//Tip Calculator2
function totalAmount(bill, service) {
    return total = bill + tipAmount(bill, service);
}
console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

//Tip Calculator3
function splitAmount(bill, service, num_people) {
    return (totalAmount(bill, service)/num_people);
}
console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));

//Print Numbers
function printNumbers(start,end) {
    for (var i=start; i<end + 1; i++) {
        console.log(i);
    }
}
printNumbers(1,10);
printNumbers(2,20);

//Print Square
function printSquare(size) {
    for (i=0; i<size; i++) {
        var line = "";
        for (j=0; j<size; j++){
            line += '*';
        }
        console.log(line);
    }
}
printSquare(6);
printSquare(10);

//Print a box
function printSquare(size) {
    for (i=0; i<size; i++) {
        var line = "";
        if (i==0 || i==size-1) {
            for (j=0; j<size; j++){
                line += '*';
            }
        } else {
            line = "*";
            for (j=0; j<size-2; j++){
                line += ' ';
            }
            line += '*';
        }
        console.log(line);
    }
}

//Print a Banner
function printBanner(text) {
    for (i=0; i<3; i++) {
        if (i==0 || i ==2) {
            var line = '';
            for (j=0; j<text.length + 1; j++) {
                line += '*';
            }
        } else {
            line = text;
        }
        console.log(line);
    }
}
printBanner('My name is Jesslyn');

//Factor a Number
function factors(number) {
    var sqrt = Math.sqrt(number);
    var factors = [];
    for (i=0; i<sqrt; i++) {
        if (number % i ==0) {
            factors.push(i);
            factors.push(number/i);
        }
    }
    return factors.sort(function (a, b) {return a - b;});
}
console.log(factors(100));

//Caesar Cipher
function cipher (string) {
    var cip = 'nopqrstuvwxyzabcdefghijklm';
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var stringNew = '';
    for (i=0; i<string.length; i++) {
        changeCase = false;
        var letter = string[i];
        if (abc.indexOf(letter) < 0) {
            letterLower = letter.toLowerCase();
            changeCase = true;
        } else {
            letterLower = letter;
        }
        if (letterLower == abc[-1]) {
            letterNew = cip[-1];
        } else if (letterLower == ' '){
            letterNew = letter;
        } else {
            pos = abc.indexOf(letterLower);
            letterNew = cip[pos];
        }
        if (changeCase) {
            letterNew = letterNew.toUpperCase();
        }
        stringNew += letterNew;
    }
    return stringNew;
}
console.log(cipher('Genius without education is like silver in the mine'));

//Caesar Cipher 2 - Decipher
function decipher (string) {
    var cip = 'nopqrstuvwxyzabcdefghijklm';
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var stringNew = '';
    for (i=0; i<string.length; i++) {
        changeCase = false;
        var letter = string[i];
        if (abc.indexOf(letter) < 0) {
            letterLower = letter.toLowerCase();
            changeCase = true;
        } else {
            letterLower = letter;
        }
        if (letterLower == cip[-1]) {
            letterNew = abc[-1];
        } else if (letterLower == ' '){
            letterNew = letter;
        } else {
            pos = cip.indexOf(letterLower);
            letterNew = abc[pos];
        }
        if (changeCase) {
            letterNew = letterNew.toUpperCase();
        }
        stringNew += letterNew;
    }
    return stringNew;
}
console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'))

//Leetspeak
function leetSpk(string) {
    var stringNew = '';
    leetDict = {'A':'4', 'E':'3', 'G':'6', 'L':'1', 'O': '0', 'S':'5', 'T':'7'};
    for (i=0; i<string.length; i++) {
        letter = string[i];
        upperLetter = letter.toUpperCase();
        if (upperLetter in leetDict) {
            letter = leetDict[upperLetter];
        }
        stringNew += letter;
     }
     return stringNew;
 }
console.log(leetSpk('Leet'));
console.log(leetSpk('Jesslyn'));

//Long-long Vowels
function longLongVowels(string) {
    var stringNew = '';
    vowels = ['a', 'e', 'i', 'o', 'u'];
    i = 0;
    while (i < string.length) {
        letter = string[i];
        letter = string[i].toLowerCase();
        if (i == (string.length - 1) && (vowels.indexOf(letter) >= 0)) {
            i += 1;
            stringNew += letter;
            break;
        } else if (i == (string.length - 1)) {
            stringNew += letter;
            i += 1;
        } else {
            if ((letter == string[i+1]) && (vowels.indexOf(letter) >= 0)) {
                var longVowel = "";
                for (j=0; j<5; j++) {
                    longVowel += letter;
                }
                stringNew += longVowel;
                i += 2;
            } else {
                stringNew += letter;
                i += 1;
            }
        }
    }
    return stringNew;
}
console.log(longLongVowels('Good'));
console.log(longLongVowels('Cheese'));
console.log(longLongVowels('Cheesee'));
console.log(longLongVowels('Man'));

//Long-long Vowels Better
// function longLongVowelsBetter(string) {
//     var stringNew = '';
//     vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (indexOf)
//     return stringNew;
// }
// console.log(longLongVowelsBetter('Good'));
// console.log(longLongVowelsBetter('Cheese'));
// console.log(longLongVowelsBetter('Cheesee'));
// console.log(longLongVowelsBetter('Man'));

//Sum the Numbers
function sumNumbers (numArray) {
    var sum = 0;
    for (i=0; i<numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
console.log(sumNumbers([1, 4, 8]));

//Just the positives
function positiveNumbers(numArray) {
    var positives = [];
    for (i=0; i<numArray.length; i++) {
        if (numArray[i] >= 0) {
            positives.push(numArray[i]);
        }
    }
    return positives;
}
console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));

//Matrix Addition
function matrixAdd(mat1, mat2) {
    var newMat = [];
    for (i=0; i<mat1.length; i++) {
        newMat.push([]);
        for (j=0; j< mat1[i].length; j++) {
            newMat[i].push('X');
            newMat[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return newMat;
}
console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

//Matrix Multiplication
function matrixMult(mat1, mat2) {
    var prodMat = [];
    for(i=0; i<mat1.length; i++) {
        prodMat.push([]);
        for (j=0; j<mat1[i].length; j++) {
            prodMat[i].push('X');
        }
    }
    prodMat[0][0] = (mat1[0][0] * mat2[0][0]) + (mat1[0][1] * mat2[1][0])
    prodMat[0][1] = (mat1[0][0] * mat2[0][1]) + (mat1[0][1] * mat2[1][1])
    prodMat[1][0] = (mat1[1][0] * mat2[0][0]) + (mat1[1][1] * mat2[1][0])
    prodMat[1][1] = (mat1[1][0] * mat2[0][1]) + (mat1[1][1] * mat2[1][1])
    return prodMat;
}
console.log(matrixMult([[2, 4], [3, 4]], [[5, 2], [3, 1]]));


//Rock, Paper, Scissors
function rockPaperScissors(throw1, throw2) {
    
}
