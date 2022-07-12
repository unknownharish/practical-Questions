let str = "AABBBBFFFFFFFFYD";

let unique = new Set();
for (x of str) {
    unique.add(x) // add unique elements to set
}
unique = [...unique];

let encoded = [];
let idx = 0
for (x of unique) {
    let itr = 0
    for (element of str) {
        if (x == element) {
            itr++; // check iteration of each element

        }
    }

    encoded += itr + unique[idx] + ' ' //then made an encoded string


    idx++; //updating the index
}

console.log(encoded)