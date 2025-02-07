// reset timer to zero 
let h1 = document.querySelector("#h1")
function start() {
    let c = 0
    st = setInterval(() => { h1.innerHTML = c++ }, 200)
}
function reset() {

    h1.innerHTML = 0
    clearInterval(st)
}