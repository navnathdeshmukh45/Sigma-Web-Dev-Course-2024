let a = 5;

function factorial(number){
    let arr = Array.from(Array(number).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b)
    return c
}

function facFor(number){
    let fac = 1;
    for(let index= 1;index <= number; index++){
        fac =fac * index
    }
    return fac
}
document.write(factorial(a))
document.write(" ",facFor(a))