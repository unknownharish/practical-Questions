(function combination(str) {


    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            console.log(str.substring(i, j))
        }
    }


})('DOG')