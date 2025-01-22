const generateBtn = document.querySelector(".generate-btn");
const upperElem=document.querySelector("#uppercase");
const lowerElem=document.querySelector("#lowercase");
const symbolElem=document.querySelector("#symbol");
const numberElem=document.querySelector("#number");
const resultElement= document.querySelector(".result");
const copyElem=document.querySelector(".copy-btn")

//pass length
const passwordLengthElement = document.getElementById("length");
let passwordSize= passwordLengthElement.value;
passwordLengthElement.addEventListener("input",()=>{
    passwordSize=passwordLengthElement.value;
});


//random functions to be called based on passwordType (Array) with matching id's
const randomFunction={
    uppercase:()=> getUpperCase(),
    lowercase:()=>getLowerCase(),
    symbol:()=>getSymbol(),
    number:()=>getNumber()
}

//save to clipboard
copyElem.addEventListener('click',async ()=>{
    const password = resultElement.innerText;
    if (!password) return;
  
    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy password to clipboard");
    }
})

//generate Password
generateBtn.addEventListener("click",()=>{
  const passType = passwordType();
  console.log("pss type",passType);

  //
  if(passwordSize<passType.length){
    alert(`"Alert! Min password length required :${passType.length} "`)
    return;
  };


  let result='';
  
  //genrate pass with one minimium char of  each selected type
  passType.forEach((item)=>{
    console.log(item)
    result+=randomFunction[item]();
  });

  //generate pass till the desired length with random types
  for(let i=passType.length;i<passwordSize;i++){
    result+=randomFunction[passType[Math.floor(Math.random()*passType.length)]]();
  }

  //display the result
  resultElement.innerText=result;
  console.log(result);
    
})


//function to decide the password type
function passwordType(){
    let passType=[];
    if(upperElem.checked){
        passType.push(upperElem.id);
    }
    if(lowerElem.checked){
        passType.push(lowerElem.id);
    }
    if(symbolElem.checked){
        passType.push(symbolElem.id);
    }  if(numberElem.checked){
        passType.push(numberElem.id);
    }
    return passType;
}



//functions for generating random chars.
function getUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
function getLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
function getSymbol(){
    const symbolsString = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
    const randomSymbolIndex= Math.floor(Math.random()*symbolsString.length);
    return symbolsString.charAt(randomSymbolIndex);
}
function getNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);

}