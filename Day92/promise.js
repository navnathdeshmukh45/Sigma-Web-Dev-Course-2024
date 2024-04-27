import fs from "fs/promises"
let a = await fs.readFile("Programmer.txt") //To Read The File
console.log(a.toString())
let b  = await fs.writeFile("Programmer.txt","\n This is good promise") //To Write The File
// console.log(b.toString())
// console.log(b)

console.log(a.toString())
let c  = await fs.appendFile("Programmer.txt","\n \n \n This is good promise good looking") //To Append The File

console.log(b.toString(),c)