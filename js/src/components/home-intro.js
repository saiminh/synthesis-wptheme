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
        amount: .5
      },
      ease: 'power3.out'
    }, 2.75)
    .fromTo( 'lottie-player', {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      stagger: {
        each: .125,
      },
      duration: 2
    }, 0.25)
    .to('#logo-fill', {
      yPercent: 66.6666,
    }, 0)
    .fromTo('.home .hero-home h1, .site-header .logo', {
      autoAlpha: 0
    }, {
      stagger: {
        amount: .25,
        from: 'end'
      },
      autoAlpha: 1,
      duration: 3,
      ease: 'power3.out'
    }, 2)
    .fromTo('.home .hero-home p', {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 3,
      ease: 'power3.out'
    }, 3)
    .fromTo('.home .hero-home .hero-bg-gradient', {
      transformOrigin: '50% 100%',
      scaleY: 0.33
    }, {
      scaleY: 1,
      ease: 'power2.inOut',
      duration: 2
    }, 0)
    ;

  gsap.fromTo('#logo-fill', {
    yPercent: 66.6666
  }, {
    yPercent: 0,
    scrollTrigger: {
      trigger: '.hero-home',
      start: '90% top',
      end: '90.1% top',
      toggleActions: 'play none reverse none ',
      overwrite: true
    }
  })

} 

export { homeIntro };