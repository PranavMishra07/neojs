let emp = [
    {
        name: "hiresh", age: 90, id: 101, contact: 123
    },
    {
        name: "animesh", age: 88, id: 102
    }

]
let data = emp.map((e) => { return e.name })
// data = emp.map((e) => { return e.age > 89 })   //in condition map returns true or false
console.log(data);


// fiter :kisi specific condition par array se data fetch karta hai and data return karta hai
// data = emp.filter((e) => { return e.age > 89 })
let fdata = emp.filter((e) => { return e.name == "hiresh" })
console.log(fdata);

