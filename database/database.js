async function data() {
    let data = await fetch("http://localhost:3000/Student")
    let fdata = await data.json()
    let tdata = fdata.map((e) => `
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
    <td>${e.contact}</td>
    <td><button onclick="mydel('${e.id}')" >delete </button></td>
    <td><button onclick="myedit('${e.id}')" >edit </button></td>
    </tr>
    `).join("")
    let a = document.querySelector("#display")
    a.innerHTML = tdata
}
data()

function mydel(id) {
    fetch(`http://localhost:3000/Student/${id}`, {
        method: "DELETE"
    })
        .then(r => alert("deleted"))
}

function insertdata() {
    let frmdata = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        city: document.querySelector("#city").value,
        contact: document.querySelector("#contact").value
    }
    fetch("http://localhost:3000/Student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(frmdata)
    }).then(r => alert("inserted"))
}
async function myedit(id) {
    let edata = await fetch(`http://localhost:3000/Student/${id}`)
    let fdata = await edata.json()
    let frm = `
    <input type="text" value="${fdata.id}" id="id1"  ><br><br>
    <input type="text" value="${fdata.name}" id="name1"  ><br><br>
    <input type="text"  value="${fdata.age}" id="age1" ><br><br>
    <input type="text"  value="${fdata.contact}" id="contact1"><br><br>
    <input type="text" value="${fdata.city}" id="city1"  ><br><br>
    <input type="submit" onclick="finalupdate('${fdata.id}')">
    `
    document.querySelector("#showfrm").innerHTML = frm
}
function finalupdate(id) {
    let final = {
        id: document.querySelector("#id1").value,
        name: document.querySelector("#name1").value,
        age: document.querySelector("#age1").value,
        city: document.querySelector("#city1").value,
        contact: document.querySelector("#contact1").value,
    }
    fetch(`http://localhost:3000/Student/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(final)
    }).then(r => alert("updated"))
}