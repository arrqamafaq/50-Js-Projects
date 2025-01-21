const textElement = document.querySelector("h1");
const speedEl=document.querySelector("#speed");

const text = ["I am a programmer","Designer is me","Me is developer"];

let speed = 300 / speedEl.value;
let currIndex=0;
let currChar=1;
writeText();

function writeText(){
        const currString=text[currIndex];
        textElement.innerHTML=currString.slice(0,currChar);
        currChar++;

        if(currChar>=currString.length){
            currIndex++;
            currChar=1;
        }
        if(currIndex>=text.length){
            currIndex=0;
        }   
    setTimeout(writeText,speed)
}
speedEl.addEventListener("input", () => {
    speed = 300 / speedEl.value;
  });
  
