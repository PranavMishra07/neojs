<tr>

</tr>
async function myedit(id) {
    let edata = await fetch(`http://localhost:3000/students/${id}`)
    let fdata = await edata.json()
    let frm = `
    <input type="text" value="${fdata.name}" id="name1"> <br>
    <input type="text" value="${fdata.age}" id="age1"> <br>
    <input type="text" value="${fdata.contact}" id="contact1"> <br>
    <input type="text" value="${fdata.city}" id="city1"> <br>
    <input type="submit"> <br>
    `
    document.querySelector("#showfrm").innerHTML = frm
}