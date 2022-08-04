let arr = [-2, -3, 4, -1, -2, 5, 3,-2];

let maxSum = Math.max();

let sum  = -100;

arr.map(x => {



    sum += x;
    if (sum > maxSum) {
        maxSum = sum;
    }

    if(sum<maxSum){
        sum = 0;
    }




})

// console.log(sum)
console.log(maxSum)


