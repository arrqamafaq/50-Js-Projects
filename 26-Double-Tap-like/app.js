const image = document.querySelector(".image");
const likedCount=document.querySelector("h5>span");
let liked=0;
//double click
//initial
let clickTime =0;
image.addEventListener('click',(e)=>{
    
    if(clickTime===0){
        //when clicked once
        clickTime=new Date().getTime();
        console.log(clickTime);
    }
        else{
            //check if its a double click
            if(new Date().getTime()-clickTime <600){
                console.log("double")
                addLike(e);
                liked++;
                likedCount.textContent=liked;
            }
            else{
        clickTime=new Date().getTime();
            }
        }  
});

function addLike(e){
    const i = document.createElement("i");
    i.classList.add("fa-solid","fa-heart");

    const x = e.clientX;
    const y = e.clientY;
    console.log(x,y)

    const leftOffset= e.target.offsetLeft;
    const topOffset=e.target.offsetTop;
    console.log(leftOffset,topOffset);

    const innerX=x -leftOffset;
    const innerY=y-topOffset;
    console.log(innerX,innerY);

    i.style.top=`${innerY}px`;
    i.style.left=`${innerX}px`;
    image.appendChild(i);
    setTimeout(()=>{
        i.remove();
    },5000)
}
