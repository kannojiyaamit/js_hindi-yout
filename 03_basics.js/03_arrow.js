const user ={
    username : "amkit",
    price : 99,

    welcomeMessage:function (){
        // console.log(`${this.username}, is my item price `)
    }
}
// console.log(user.username);
user.username ="shalu";
user.welcomeMessage();


function chai (){
    // console.log(this);
}


const chai1 = ()=>{
    // console.log(this);
}


(function myTea(){
    console.log("my database 1")
})();

(()=>{
    console.log("my database 2")
})()