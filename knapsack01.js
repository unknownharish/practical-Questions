let value = [60, 100, 120];
let weight = [10, 20, 30];

let baglimit = 50;

let matrix = [];
let maxNumer = (a, b) => {

    a = parseInt(a)
    b = parseInt(b)
    if (a > b) {
        return a
    } else {
        return b
    }

}

for (let i = 0; i <= weight.length; i++) {
    let inserted = []
    for (let j = 0; j <= baglimit; j++) {

        if (i == 0 || j == 0) {
            inserted.push(0)
        } else {

            if (j < weight[i - 1]) {
                inserted.push(matrix[i - 1][j]) // paste the user index value from matrix
            } else {

                let max = maxNumer(matrix[i - 1][j], value[i - 1] + matrix[i - 1][j - (weight[i - 1])]) // find the max of if elemenst is not taken or element is taken
                inserted.push(max) // adding to matrix

            }
        }

    }
    matrix = [...matrix, inserted]
}


// reverse iteration of matrix for finding elements

let x = weight.length
let y = baglimit


while (x > 0) {


    if (matrix[x][y] == matrix[x - 1][y]) {
        x = x - 1;

    } else {
        x = x - 1;
        y = y - weight[x]

        console.log('includes ', value[x], 'weight is ', weight[x], 'x is ', x)

    }
}