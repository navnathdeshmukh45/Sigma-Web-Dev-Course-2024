let a = prompt("Enter the First Numnber");
let b = prompt("Enter the Second Number");

let sum = parseInt(a) + parseInt(b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}
console.log("The sum is ",sum);

function main(){
    let x = 1;
    try{
        console.log("The sum is ", sum * x);
        return true
    }
    catch{
        console.log("Error aa gaya bhai")
        return false
    }
    finally{
        console.log("files are being closed and db connection is being closed")
    }
}

let c = main() ;