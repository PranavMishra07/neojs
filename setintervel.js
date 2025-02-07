//setintervel is a function used to repeatedly execute a block of code at specified time intervels(in millisecond) it continues to call the function 
//untill it is explicitly stoped using clearIntervel
// two arguments accept karta hai pahle callback function and second is timer
// let intervel = setInterval(() => { document.write("rinkiya ke papa") }, 1000)
let intervel = setInterval(() => { alert("rinkiya ke papa") }, 1000)
// to stop the repeated execution, you need to use clearinterval
clearInterval(intervel)
let st = 0
function start() {
    let c = 0
    let count = document.getElementById('count')
    st = setInterval(() => { count.innerHTML = c++ }, 1000)
}
function stop() {
    clearInterval(st)
}