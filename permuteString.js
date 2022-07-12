const permute_and_print = function(str) {
    permute("", str);
}

const permute = function(prefix, str) {
    var n = str.length
    if (n == 0) {
        console.log(prefix + "")
    }
    if (n != 0) {
        for (let i = 0; i < n; i++) {
            permute(prefix + str.charAt(i),
                str.substring(i + 1, n) + str.substring(0, i))
        }
    }
}

permute_and_print('ABC')

let str = 'abcdefghij'

// console.log(str.substring(0, 2))