const { error } = require("console")
// const fs = require("fs")

// console.log(fs)

console.log("Starting")

// fs.writeFileSync("Programmer_navnath.txt","Programmer Navnath is a good boy") // To create a new file  and write some text

// To the callback hell 
fs.writeFile("Programmer.txt","Programmer Navnath is a good boy",()=>{
    console.log("done")
    fs.readFile("Programmer.txt", (error, data)=>{
     console.log(error, data.toString())
    })
})

fs.appendFile("Programmer.txt","robo",(e, d)=>{
    console.log(d.toString())
})
console.log("Ending")