let no = [-1, 2, 3, 4, -5]
console.log((minValueArr(no) * -2) + no.reduce((x, y) => x + y))

//using kadnes algo to find min sub array 


function minValueArr(arr) {

    let minSum = 1000;
    let currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let prevCurrSUm = currSum

        currSum = currSum + arr[i];
        if (currSum < minSum) {
            minSum = currSum;

        }
        if (currSum > prevCurrSUm) {
            currSum = 0

        }
    }
    return minSum;
}