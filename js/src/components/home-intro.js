import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function homeIntro() {

  function invertBgGrad(){
    document.querySelector('.page-reveal').classList.toggle('page-reveal--home');
  }
  invertBgGrad();

  let tl = gsap.timeline({
    onComplete: () => { invertBgGrad(); }
  });
    tl.to('.home ul.menu li', {
      autoAlpha: 1,
      stagger: .2
    }, 2)
    .to('.site-header .logo', {
      scale: 1,
      duration: 1,
      transformOrigin: "100% 0%",
      ease: "circ.inOut"
    }, 2)
    .to( '.hero-home h2', {
      autoAlpha: 1,
      duration: 2,
      ease: 'circ.out'
    }, 2);

  gsap.to('#logo-fill', {
    yPercent: -66.666,
    scrollTrigger: {
      trigger: '.hero-home',
      start: '90% top',
      end: '90% top',
      toggleActions: 'play none reverse none ',
      // markers: true
    }
  })

} 

export { homeIntro };