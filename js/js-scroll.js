// constant elements that're always the same and link to the same thing. the leaves and stars that fall down the page.
const scrollElements = document.querySelectorAll(".js-scroll");
const leaf = document.getElementById("leaf");
const star = document.getElementById("star");
const leaf2 = document.getElementById("leaf2");
const star2 = document.getElementById("star2");
const leaf3 = document.getElementById("leaf3");
const leaf4 = document.getElementById("leaf4");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const leaf5 =  document.getElementById("leaf5");
const leaf6 = document.getElementById("leaf6");
const leaf7 = document.getElementById("leaf7");
const star5 = document.getElementById("star5");
const star6 = document.getElementById("star6");
const leaf8 = document.getElementById("leaf8");

// performes the same chosen action for everything inside the list
scrollElements.forEach((el) => {
  if(elementInView(el, .5)){
    displayScrollElement(el)
  }
}
)

// listen for when the webpage is loaded and reloaded, upon every new re-load everything on the list will perform its specified animation. 
window.addEventListener("scroll", throttle(handleScrollAnimation, 100));
window.addEventListener("load", leafFall)
window.addEventListener("load", starFall)
window.addEventListener("load", leaf2Fall)
window.addEventListener("load", star2Fall)
window.addEventListener("load", leaf3Fall)
window.addEventListener("load", leaf4Fall)
window.addEventListener("load", star3Fall)
window.addEventListener("load", star4Fall)
window.addEventListener("load", leaf5Fall)
window.addEventListener("load", leaf6Fall)
window.addEventListener("load", leaf7Fall)
window.addEventListener("load", star5Fall)
window.addEventListener("load", star6Fall)
window.addEventListener("load", leaf8Fall)

// string adding the different falling elements to the classlist to be referenced to so the animations function.

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

function leaf5Fall(){
  leaf5.classList.add("leaf5-fall");
  console.log("loaded")
}

function leaf6Fall(){
  leaf6.classList.add("leaf6-fall");
  console.log("loaded")
}

function leaf7Fall(){
  leaf7.classList.add("leaf7-fall");
  console.log("loaded")
}

function leaf8Fall(){
  leaf8.classList.add("leaf8-fall");
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
function star5Fall(){
  star5.classList.add("star5-fall");
  console.log("steers")
}
function star6Fall(){
  star6.classList.add("star6-fall");
  console.log("steers")
}
// sees if the element is currently in view
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
// display element if it is currently on the visible part of the screen
function displayScrollElement(el){
  el.classList.add("scrolled");
}
// hide elemnts if currently not being scrolled onto
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
// controls the amount of times a function can be performed in an amount of time / limiting the amount of times it can happen within a specified time.
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
