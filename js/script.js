// locomotive scrolltrigger work same time
function loco() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
loco();

// navbar onclick slider
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// navbar slider down and show mobile nav icon
function navbarAnimation() {
  var navTl = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      scroller: "#main",
      start: "top -3%",
      end: "top 5%",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
  navTl.to("nav .right .menu", {
    display: "block",
    scale: 1,
  });
  navTl.to("nav .right .links", {
    y: "-100%",
    opacity: 0,
  })

  navTl.to("nav .left .logo", {
    display: "none",
    y: "-100%",
  })
}
navbarAnimation();

// index page 1 image fix and scale up
// gsap.to(".index_page_1 .secondary", {
//   scale: 1.1,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".index_page_1",
//     scroller: "#main",
//     scrub: 3,
//     pin: true,
//     start: "top -80%",
//     end: "bottom 30%",
//     endTrigger: ".secondary",
//   },
// });

// index page 2 rotate button
function rotateButton() {
  const text = document.querySelector(".index_page_2 .text p");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 19}deg)">${char}</span>`
    )
    .join("");
}
rotateButton();

// index page 3 Left Right Animation
function pageLeftRightAnimation() { 
  gsap.to(".index_page_3 .go-left", {
    scrollTrigger: {
      trigger: ".index_page_3",
      scroller: "#main",
      start: "top 60%",
      end: "bottom 10%",
      scrub: 1,
    },
    x: "-30%",
  });

  gsap.to(".index_page_3 .go-right", {
    scrollTrigger: {
      trigger: ".index_page_3",
      scroller: "#main",
      start: "top 60%",
      end: "bottom 10%",
      scrub: 1,
    },
    x: "10%",
  });
}
pageLeftRightAnimation()

// index page 4 fixed scroll Animation
function myFunction(x) {
  if (x.matches) {
    gsap.to(".index_page_4 .box", {
      scrollTrigger: {
        trigger: ".index_page_4 .main-box",
        scroller: "body",
        pin: true,
        start: "top -20%",
        end: "bottom 0",
        endTrigger: ".box3",
        scrub: true,
      },
      y: "-217%",
    });
  } else {
    gsap.to(".index_page_4 .right .box", {
      scrollTrigger: {
        trigger: ".index_page_4",
        scroller: "#main",
        start: "top -7%",
        end: "bottom 0",
        endTrigger: ".box3",
        pin: true,
        scrub: true,
      },
      y: "-240%",
    })
  }
}
var x = window.matchMedia("(max-width: 999px)");
myFunction(x);
x.addListener(myFunction);