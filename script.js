gsap.registerPlugin(ScrollTrigger);

const textElement = document.getElementById("welcomeText");
const text = textElement.innerText;
textElement.innerHTML = ""; 

text.split("").forEach(char => {
  let span = document.createElement("span");
  span.innerText = char === " " ? "\u00A0" : char;
  span.style.opacity = 0; 
  textElement.appendChild(span);
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".min-h-screen",
    start: "top top",
    end: "+=1500",  
    scrub: 1,
    pin: true        
  }
});


tl.to("#car", {
  x: window.innerWidth - 160,
  ease: "none",
  duration: 2 
}, 0);

tl.to("#stripe", {
  width: "96%",
  ease: "none",
  duration: 2 
}, 0);

tl.to("#welcomeText span", {
  opacity: 1,
  stagger: 0.1, 
  ease: "none"
}, 0.2); 

tl.to("#card1", { opacity: 1, y: 0, ease: "back.out(1.5)" }, 0.4)  
  .to("#card2", { opacity: 1, y: 0, ease: "back.out(1.5)" }, 0.5)  
  .to("#card3", { opacity: 1, y: 0, ease: "back.out(1.5)" }, 1.3)  
  .to("#card4", { opacity: 1, y: 0, ease: "back.out(1.5)" }, 1.4); 