import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function homeIntro() {

  function invertBgGrad(){
    document.querySelector('.page-reveal').classList.toggle('page-reveal--home');
  }
  invertBgGrad();

  let bgGrad = document.createElement('div');
  bgGrad.classList.add('hero-bg-gradient');
  document.querySelector('.hero-home').append(bgGrad);

  let tl = gsap.timeline({
    onComplete: () => { invertBgGrad(); }
  });
    tl.to('.home ul.menu li', {
      autoAlpha: 1,
      stagger: {
        amount: .5,
        duration: 1
      },
      duration: 3,
      ease: 'power3.out'
    }, 3)
    .fromTo( 'lottie-player', {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      stagger: {
        amount: .5,
        duration: .5
      },
      duration: 2.5
    }, 0.25)
    .fromTo('.home .hero-home p', {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 3,
      ease: 'power3.out'
    }, 3)
    .fromTo('.home .hero-home .hero-bg-gradient', {
      transformOrigin: "50% 100%",
      scaleY: 0
    }, {
      scaleY: 1,
      ease: 'power2.inOut',
      duration: 3
    }, .25)
    ;

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