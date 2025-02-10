function savedata() {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let course = document.querySelector("#course").value
    let ID = document.querySelector("#id").value
    let contact = document.querySelector("#contact").value
    let address = document.querySelector("#address").value
    localStorage.setItem("name", name)
    localStorage.setItem("age", age)
    localStorage.setItem("course", course)
    localStorage.setItem("ID", ID)
    localStorage.setItem("contact", contact)
    localStorage.setItem("address", address)
    // return false
}
function showdata() {
    let shname = document.querySelector("#shname")
    let shage = document.querySelector("#shage")
    let shcourse = document.querySelector("#cc")
    let shId = document.querySelector("#Ci")
    let shCo = document.querySelector("#Co")
    let shAA = document.querySelector("#AA")

    let getname = localStorage.getItem("name")
    let getage = localStorage.getItem("age")
    let getcourse = localStorage.getItem("course")
    let getID = localStorage.getItem("ID")
    let getcontact = localStorage.getItem("contact")
    let getaddress = localStorage.getItem("address")

    shname.innerHTML = getname
    shage.innerHTML = getage
    shcourse.innerHTML = getcourse
    shId.innerHTML = getID
    shCo.innerHTML = getcontact
    shAA.innerHTML = getaddress
    // return false
}
function clearr() {
    localStorage.clear()
    location.reload()
}