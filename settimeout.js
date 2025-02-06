//settimeout is function that execute only onetime within the time we set this is also accept two 
// setTimeout(() => { alert("Hello guys") }, 2000)
let frm = document.querySelector("#frm")
setTimeout(() => {
    return frm.style.display = "block"
}, 2000);
