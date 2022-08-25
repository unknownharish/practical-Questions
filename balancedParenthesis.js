// let str = '[()]{}{[()()]()}';
let str = '[(])';

let paran = Array.from(str);

let start = ['[', '(', '{'];
let end = [']', ')', '}']

console.log(paran)


let err;

let checkStr = [];

for (let i = 0; i < str.length; i++) {
    err = false;
    if (start.includes(str[i])) {
        // checkStr[i] = str[i]
        console.log('item inserted', checkStr.push(str[i]))
    }
    else {

        if (start.indexOf(checkStr[checkStr.length - 1]) == end.indexOf(str[i])) {
            console.log('popped item', checkStr.pop())

        }
        else {
            err = true
        }

    }


    if (err) {

        break;
    }
}


err ? console.log('unbalanced') : console.log('balanced');


// console.log(checkStr)



// console.log(end.indexOf(str[2]) == start.indexOf(str[2 - 1]))