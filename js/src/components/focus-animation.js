import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function focusAnimation(){
  let animationCanvasH = document.querySelector('.focus-alignment-animation').offsetHeight;
  let headlineCenterY = animationCanvasH * 0.75 - document.querySelector('.focus-alignment-animation-polygons').offsetHeight * 0.5;
  let polygonH = document.querySelector('.focus-alignment-animation-polygons .wp-block-image').offsetHeight;
  let polygons = document.querySelectorAll('.focus-alignment-animation-polygons .wp-block-image');
  gsap.set( polygons, { transformOrigin: "50% 50%"});
  gsap.to( polygons, {
    rotationZ: 360,
    duration: 18,
    repeat: -1,
    ease: "none"
  });

  let polygons_stack = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "linear"
    }
  })
  .addLabel('start')
  .fromTo(polygons[0], 
    { scale: 1.3, xPercent: 100, y: 0}, 
    { scale: 1, xPercent: 100, y: -headlineCenterY }, 'start' )
  .fromTo(polygons[1], 
    { scale: 1.3, xPercent: -200, y: 0}, 
    { scale: 1, xPercent: 0, y : -headlineCenterY - polygonH }, 'start' )
  .fromTo(polygons[2], 
    { scale: 2, xPercent: 0, y: 0 }, 
    { scale: 1, xPercent: -100, y : -headlineCenterY + polygonH }, 'start' )
  .addLabel('stacked')
  .to(polygons[0], 
    // { scale: 1, xPercent: 100, y: -headlineCenterY }, 
    { scale: 1, xPercent: 0, y: 0}, 'stacked' )
  .to(polygons[1], 
    // { scale: 1, xPercent: 0, y : -headlineCenterY - polygonH }, 
    { scale: 1, xPercent: 0, y: 0}, 'stacked' )
  .to(polygons[2], 
    // { scale: 1, xPercent: -100, y : -headlineCenterY + polygonH  }, 
    { scale: 1, xPercent: 0, y: 0}, 'stacked' )
  .addLabel('end');
  
  ScrollTrigger.create({
      trigger: '.focus-alignment-animation',
      start: 'top 50%',
      end: '60% 50%',
      // markers: true,
      onEnter: () => { polygons_stack.tweenTo('stacked', { duration: 1, ease: 'power3.out' }) },
      onEnterBack: () => { polygons_stack.tweenTo('stacked', { duration: 1, ease: 'power3.out' }) },
      onLeave: () => { polygons_stack.tweenTo('end', { duration: 1, ease: 'power3.out' }) },
      onLeaveBack: () => { polygons_stack.tweenTo('start', { duration: 1, ease: 'power3.out' }) }
    });
    
  gsap.set(polygons, {scale: 1, xPercent: 0, y: 0})

}
export { focusAnimation }