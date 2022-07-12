function fact(n) {
    let f = 1
    if (n == 0) {
        return 1
    }

    f = n * fact(n - 1)

    return f
}

console.log(fact(5))