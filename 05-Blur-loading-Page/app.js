window.addEventListener("DOMContentLoaded", () => {
  const showcaseImage = document.querySelector(".showcase-image");
  const loaderText = document.querySelector(".loader-text");

  let loadPercentage = 0;
  let interval = setInterval(loader, 30);
    

  function loader() {
    loadPercentage++;
    if (loadPercentage > 99) {
      clearInterval(interval);
    }
    loaderText.textContent=loadPercentage+"%";
    loaderText.style.opacity=scale(loadPercentage,0,101,1,0);
    showcaseImage.style.filter=`blur(${scale(loadPercentage,0,100,30,0)}px)`
    console.log(interval)
  }

  //function for mapping interval to a particular range of value
  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
});
