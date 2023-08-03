let numberset= "11234567890";
let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerset  = "abcdefgijklmnopqrstuvwxyz";
let specialset = "!@#$%^&*()";

const numberInput = document.getElementById("numberCase");
const upperCase = document.getElementById("upperCase");
const loweCase = document.getElementById("lowerCasa");
const specialCase= document.getElementById("specialCase");
const generate = document.getElementById("btn")
const passLength =document.getElementById("lenth")
const display = document.getElementById ("pass-box")

const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()*(dataset.length-1))]
}
 

const generatepassword = (password="")=>{
     if(numberInput.checked){
         password += getRandomData(numberset)
     }
    if (upperCase.checked){
        password += getRandomData(upperset)
    }
    if(lowerCase.checked){
        password += getRandomData(lowerset)
    }
    if (specialCase.checked){
        password += getRandomData(specialset)
        
    }
    if (password.length < passLength.value){
        return generatepassword(password);
    }
    console.log(truncateString(password,passLength.value))
    display.innerHTML = truncateString(password , passLength.value)
}

generate.addEventListener("click", function (){
    generatepassword();
//    console.log("button is working ")
})


function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) ;
    
  } else {
      return str;
  }
}