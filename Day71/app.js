document.querySelector(".box")
document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName
document.querySelector(".container").nodeName
document.querySelector(".container").textContent
document.querySelector(".conatiner").innerHTML = " Hey I am good Best person for you "
document.querySelector(".conatiner").hasAttribute("style")
document.querySelector(".conatiner").getAttribute("style")
document.querySelector(".conatiner").setAttribute("style","display:inline")
document.querySelector(".conatiner").attributes
document.querySelector(".conatiner").removeAttribute("style")
document.designMode = "on" // To Change the page 
document.querySelector(".box").dataset 
document.querySelector(".box").remove()
document.querySelector(".box").classList
document.querySelector(".box").className
document.querySelector(".container").classList.add("Prog")
document.querySelector(".container").classList.remove("Prog")
document.querySelector(".container").classList.toggle("Prog")

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry</b>"
div.setAttribute("class", "created");
document.querySelector(".container").before(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")

let con = document.querySelector(".container")
con.insertAdjacentHTML("afterend","<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")

let cont1 = document.querySelector(".container")
cont1.insertAdjacentHTML("beforebegin","<b> I am under the water. </b>")

let con1 = document.querySelector(".container")
con1.insertAdjacentHTML("beforeend","<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")

