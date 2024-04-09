let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("click",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML ="<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})