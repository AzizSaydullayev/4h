let form=document.querySelector("form")
let body=document.querySelector("body")
let number=document.querySelector(".number")
let variableText=document.querySelector(".variableText")


form.addEventListener("submit",e =>{
e.preventDefault()
variableText.innerHTML=number.value
number.value=""
})

const dec =document.querySelector(".decreace")
const inc =document.querySelector(".increase")

dec.addEventListener("click",()=>{
variableText.textContent=`${parseInt(variableText.innerHTML)-1}`
})

inc.addEventListener("click",()=>{
    variableText.textContent=`${parseInt(variableText.innerHTML)+1}`
    })


const color=document.querySelector(".color")

color.addEventListener('input',e =>{
variableText.style.color=e.target.value
})