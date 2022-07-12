function totalJumps(jump, slip, buildings, total) {


    let totalJumps = 0;
    let ht;

    for (let i = 0; i < total; i++) {
        ht = buildings[i];
        while (ht > 0) {
            if (ht < jump) {
                ht = ht - jump;
                totalJumps++
            } else {
                ht = parseInt(ht - (jump - slip))
                totalJumps++;
            }
        }

    }


    return totalJumps;
}

let x = 10;
let y = 1;
let height = [11, 34, 27, 9];
let n = height.length;
console.log(totalJumps(x, y, height, n));