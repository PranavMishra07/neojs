function sub() {
    let name = document.querySelector("#name").value
    let course = document.querySelector("#course").value
    let address = document.querySelector("#address").value
    let contact = document.querySelector("#contact").value
    let Id = document.querySelector("#id").value
    localStorage.setItem("name", name)
    localStorage.setItem("course", course)
    localStorage.setItem("address", address)
    localStorage.setItem("contact", contact)
    localStorage.setItem("Id", Id)
    let firstname = localStorage.getItem("name")
    let firstCourse = localStorage.getItem("course")
    let firstAddress = localStorage.getItem("address")
    let firstContact = localStorage.getItem("contact")
    let firstId = localStorage.getItem("Id")

    let N = document.querySelector("#nn").innerHTML = firstname
    let cc = document.querySelector("#cc").innerHTML = firstCourse
    let A = document.querySelector("#AA").innerHTML = firstAddress
    let Co = document.querySelector("#Co").innerHTML = firstContact
    let id = document.querySelector("#Ci").innerHTML = firstId
    let frm = document.querySelector("#frm").style.display = "none"
    let h1 = document.querySelector(".head").style.display = "block"
    let log = document.querySelector("#log").style.display = "none"
    return false
}
function logout() {
    localStorage.clear()
    let h1 = document.querySelector(".head").style.display = "none"
    frm.style.display = "block"
    log.style.display = "block"
}