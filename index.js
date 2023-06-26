let sun = document.getElementById("sun-icon")
let moon = document.getElementById("moon-icon")
let body = document.getElementsByTagName("body")[0]
let selected = document.getElementById("home-selected")
let footerText = document.querySelector("footer .footer")
let footerLine = document.getElementsByTagName("footer")[0]




function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    body.classList.toggle("body-dark")
    selected.style.color="white"
    footerText.classList.toggle("footer-dark-mode")
    footerLine.classList.toggle("footer-line-dark-mode")

}


function darkMode(){
    sun.style.display="none"
    moon.style.display="block"
    body.classList.toggle("body-dark")
    selected.style.color="black"
    footerText.classList.toggle("footer-dark-mode")
    footerLine.classList.toggle("footer-line-dark-mode")
}