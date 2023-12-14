// for of 

const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    // console.log(i)
}

//maps
const myArr = arr
.map((num) =>  num*10)
.map((num)=> num - 2)
.filter((num)=>num<=30)



console.log(myArr)