const multi = () => {
    let userdata = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }
    if (userdata.name == "") {
        alert("Please Enter Your Name")
        document.querySelector("#name").focus()
        return false
    }
    else if (userdata.email == "") {
        alert("Please Enter Your Email")
        document.querySelector("#email").focus()
        return false
    }
    else if ((!userdata.email.includes("@"))) {     // includes check character is present or not in the input
        alert("use @ for Validation")
        document.querySelector("#email").focus()
        return false
    }
    else if (userdata.password == "") {
        alert("Please Enter Your password")
        document.querySelector("#password").focus()
        return false
    }
    else if (!(userdata.password.match(/[~!@#$%^&*>?}|]/))) {
        alert("Please use some special character")
        document.querySelector("#password").focus()
        return false
    }
    localStorage.setItem("userdata", JSON.stringify(userdata))
    //json.stringify is use to change any  data into string
}
//json.parse is used to change string data to data which we set in setitem
let data = JSON.parse(localStorage.getItem("userdata"))
console.log(data);

function loginform() {
    let logindata = {
        loginemail: document.querySelector("#loginemail").value,
        loginpassword: document.querySelector("#loginpass").value
    }
    if (data.email != logindata.loginemail || data.password != logindata.loginpassword) {
        alert("User Not Found")
        document.querySelector("#loginemail").focus()
        return false
    }

}