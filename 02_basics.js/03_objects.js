


//object literals

const  mySym = Symbol("key1")
const juser = {
    name:"hitesh",
    age :18,
   [mySym]:"mykey1",
    Email:"amit_kannojiya@yahoo.com",
    isLoggedIn:false,
    lastLoginDays : ["monday","tuesday"]
}

console.log(juser.Email)
console.log(juser["Email"])
console.log(typeof juser[mySym])
console.log(this)