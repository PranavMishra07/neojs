//A callback fnction is a function passed as an argument to another function,which is then invoked ("Called back")
let emp = [
    {
        name: "hiresh", age: 90, id: 101, contact: 123
    },
    {
        name: "animesh", age: 88, id: 102
    },
    {
        name: "Himanshu",
        id: 1,
        age: 20,
        designation: "developer"
    },
    {
        name: "Satyam",
        id: 2,
        age: 18,
        designation: "asistant"
    },
    {
        name: "Arpit",
        id: 3,
        age: 16,
        designation: "manager"
    }

]
let data = emp.map((e) => { return e.name })
// data = emp.map((e) => { return e.age > 89 })   //in condition map returns true or false
console.log(data);


// fiter :kisi specific condition par array se data fetch karta hai and data return karta hai
// data = emp.filter((e) => { return e.age > 89 })
let fdata = emp.filter((e) => { return e.name == "Himanshu" })
console.log(fdata);

