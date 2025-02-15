// async is used to wait for the data to be fetched from the api and then show the data in the browser 
// fetch is used to fetch the data from the api
await is used to wait for the data to be fetched from the api
async function Demo() {
    let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")  //await is used to wait for the all code is 
    let data = await apidata.json()   // json() is used to convert the data into json format
    let api = document.querySelector("#apidata")
    let td = data.map((e) => { return e.name + e.id + e.email })  //fetch the data from the api and show 
    api.innerHTML = td
    // console.log(data)
}
Demo()