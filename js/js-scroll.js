const scrollElements = document.querySelectorAll(".js-scroll");
const leaf = document.getElementById("leaf");
const star = document.getElementById("star");
const leaf2 = document.getElementById("leaf2");
const star2 = document.getElementById("star2");
const leaf3 = document.getElementById("leaf3");
const leaf4 = document.getElementById("leaf4");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
scrollElements.forEach((el) => {
  if(elementInView(el, .5)){
    displayScrollElement(el)
  }
}
)
window.addEventListener("scroll", throttle(handleScrollAnimation, 100));
window.addEventListener("load", leafFall)
window.addEventListener("load", starFall)
window.addEventListener("load", leaf2Fall)
window.addEventListener("load", star2Fall)
window.addEventListener("load", leaf3Fall)
window.addEventListener("load", leaf4Fall)
window.addEventListener("load", star3Fall)
window.addEventListener("load", star4Fall)
//display functions

function leafFall(){
  leaf.classList.add("leaf-fall");
  console.log("loaded")
}

function leaf2Fall(){
  leaf2.classList.add("leaf2-fall");
  console.log("leefs")
}

function leaf3Fall(){
  leaf3.classList.add("leaf3-fall");
  console.log("loaded")
}

function leaf4Fall(){
  leaf4.classList.add("leaf4-fall");
  console.log("loaded")
}

function starFall(){
  star.classList.add("star-fall");
  console.log("stared")
}
function star2Fall(){
  star2.classList.add("star2-fall");
  console.log("steers")
}
function star3Fall(){
  star3.classList.add("star3-fall");
  console.log("steers")
}
function star4Fall(){
  star4.classList.add("star4-fall");
  console.log("steers")
}

// checks whether element is in viewable area 
function elementInView(el, amountInView = 1){
  const elementTop = el.getBoundingClientRect().top;
  const elementHeight = el.getBoundingClientRect().height;
  return (
    elementTop + elementHeight * amountInView <= document.documentElement.
    clientHeight && elementTop + (elementHeight * amountInView) > 0
  )

  // checks if conenet id above viewable area
}
function elementOutOfView(el) {
  const elementTop = el.getBoundingClientRect().top;
  const elementBottom = el.getBoundingClientRect().bottom;
  return(
    elementTop >= document.documentElement.clientHeight || elementBottom < 0
  )

}
// show element
function displayScrollElement(el){
  el.classList.add("scrolled");
}
// hide elements
function hideScrollElement(el){
  el.classList.remove("scrolled")
}
function handleScrollAnimation(){
  scrollElements.forEach((el) =>{
    if(elementInView(el, .5)){
      displayScrollElement(el)
    }else if(elementOutOfView(el)){
      hideScrollElement(el)
    }
  }
  )
}
//UTILITY
// throttle - fn = function to call, wait = interval in ms
function throttle(fn, wait){
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
