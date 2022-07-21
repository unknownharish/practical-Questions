let obj = {
    fname: 'harish',
    lname: 'vasisht'
}


function check(city, country) {
    console.log(this.fname, this.lname, city, country)
}


Function.prototype.myBind = function(obj, ...params) {

    let point_To_Prev_Function = this
    return (...args) => {

        point_To_Prev_Function.apply(obj, [...params, ...args])
    }
}

let createdBind = check.myBind(obj, 'delhi')

createdBind('india')