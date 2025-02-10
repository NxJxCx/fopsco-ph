document.addEventListener("DOMContentLoaded", (event) => {
  window.scrollTo(0, 0);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  let s0 = gsap.timeline();
  s0.from(".long-section .section-header", { x: "-100%" }, 0);
  s0.from(".long-section .section-wrapper", { opacity: 0, y: "10%"});

  let s1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".long-section",
      endTrigger: "#theprocess",
      start: "top top",
      end: "bottom center",
      scrub: true,
    }
  });

  s1.from("#theprocess .section-header", { x: "-100%" });
  s1.from("#horizontal-section", {opacity: 0});

  let panels = gsap.utils.toArray(".section-content-style");
  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    scrollTrigger: {
      trigger: "#horizontal-section",
      scrub: 1,
      pin: true,
      snap: (1 / (panels.length - 1)),
      end: () => {
        return "+=" + document.querySelector("#horizontal-section").offsetWidth
      }
    }
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
});
