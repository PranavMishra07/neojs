function sub() {
    let name = document.querySelector("#name").value
    let address = document.querySelector("#address").value
    let contact = document.querySelector("#contact").value
    let city = document.querySelector("#city").value
    localStorage.setItem("name", name)
    localStorage.setItem("address", address)
    localStorage.setItem("contact", contact)
    localStorage.setItem("city", city)
    return false
}