// reverse the all letter of string
(function II() {

    let str = 'I love you soo much!'
    let rev = ''

    let splited = str.split(' ');
    console.log(splited)

    for (words of splited) {

        let obj = [...words];
        obj = obj.reverse().toString().replace(/,/g, '')
        console.log(obj)
        rev += ' ' + obj
    }

    console.log(rev)
})()