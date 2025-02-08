function submit() {
    let name = document.querySelector("#name").value
    localStorage.setItem("name", name)
    return false
}
function showdata() {
    let shname = document.querySelector("#shname")
    let shage = document.querySelector("#shage")

    let getname = localStorage.getItem("name")
    let getage = localStorage.getItem("age")

    shname.innerHTML = getname
    shage.innerHTML = getage
}
function clearr() {
    localStorage.clear()
    location.reload()
}