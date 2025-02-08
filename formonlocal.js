function sub() {
    let name = document.querySelector("#name").value
    let address = document.querySelector("#address").value
    let contact = document.querySelector("#contact").value
    let city = document.querySelector("#city").value
    localStorage.setItem("name", name)
    localStorage.setItem("address", address)
    localStorage.setItem("contact", contact)
    localStorage.setItem("city", city)
    let firstname = localStorage.getItem("name")
    let firstAddress = localStorage.getItem("address")
    let firstContact = localStorage.getItem("contact")
    let firstCity = localStorage.getItem("city")

    let N = document.querySelector("#nn").innerHTML = firstname
    let A = document.querySelector("#AA").innerHTML = firstAddress
    let Co = document.querySelector("#Co").innerHTML = firstContact
    let Ci = document.querySelector("#Ci").innerHTML = firstCity
    let frm = document.querySelector("#frm").style.display = "none"
    let h1 = document.querySelector(".head").style.display = "block"
    return false
}
function logout() {
    localStorage.clear()
    let h1 = document.querySelector(".head").style.display = "none"
    frm.style.display = "block"
}