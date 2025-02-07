//local storage is storing data long term on the client side
// local storage is  a way to store data persistently in the browser using key value pairs
// data is scoped to the origin
//protocol  http,https
//Domain  www.google.com
//port   5000   ... accessible only by the pages from the same origin

//there are the main funnction(methods) provided by localStorage;
// setItem(key,value)   -> store data to localstorage
//getItem(key)   ->data retrive in localstorage
//removeItem(key)  ->particular data remove in localstorage
//Clear()     ->all data clear from localstorage
// format key and value
//important Notes => both key and values must be String  in localstorage
//save data in the local storage
//key is always unique if you write the same  it override the last key
// localStorage.setItem("Name", "Amit")
// localStorage.setItem("age", "89")
// localStorage.setItem("Name", "Rahul") // it override the last name(key)
// //to get data from localstorage with getItem(key)
// let age = localStorage.getItem("age")
// alert(age)
// let fname = "Manish "
// localStorage.setItem("fname", fname)
// localStorage.removeItem("fname")
// localStorage.clear()



// login form se next page par data show ho then logout button se data remove ho jaye