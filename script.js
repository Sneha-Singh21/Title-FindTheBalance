var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x+ 30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2
    crsr.style.border = "0.5px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
   
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #ff6600"
    crsr.style.backgroundColor = "#ff6600"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1.7,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -80%",
    scrub: 2,
  },
});


gsap.from("#about-us img, #about-us-in",{
  y:80,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:2
  }
})

gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2.5
  }
})

gsap.from("#colon1", {
  y:-50,
  x:-50,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 48%",
    scrub:4
  }
})

gsap.from("#colon2", {
  y:50,
  x:50,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 48%",
    scrub:4
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 75%",
    scrub:3
  }
})





