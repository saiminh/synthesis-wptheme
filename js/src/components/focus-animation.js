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
      ease: "power2.out"
    }
  })
  .fromTo(polygons[0], 
    { scale: 1.3, xPercent: 150, y: 0}, 
    { scale: 1, xPercent: 100, y: -headlineCenterY }, 0 )
  .fromTo(polygons[1], 
    { scale: 1.3, xPercent: -200, y: 0}, 
    { scale: 1, xPercent: 0, y : -headlineCenterY - polygonH }, 0 )
  .fromTo(polygons[2], 
    { scale: 2, xPercent: 0, y: 0 }, 
    { scale: 1, xPercent: -100, y : -headlineCenterY + polygonH }, 0 );
  
  let polygons_back = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "power3.inOut"
    }
  })
  .fromTo(polygons[0], 
    { scale: 1, xPercent: 100, y: -headlineCenterY }, 
    { scale: 1, xPercent: 0, y: 0}, 0 )
  .fromTo(polygons[1], 
    { scale: 1, xPercent: 0, y : -headlineCenterY - polygonH }, 
    { scale: 1, xPercent: 0, y: 0}, 0 )
  .fromTo(polygons[2], 
    { scale: 1, xPercent: -100, y : -headlineCenterY + polygonH  }, 
    { scale: 1, xPercent: 0, y: 0}, 0 );

  ScrollTrigger.create({
      trigger: '.focus-alignment-animation',
      start: 'top 50%',
      end: '60% 50%',
      // markers: true,
      onEnter: () => { console.log('enter'); polygons_back.pause(); polygons_stack.play(0) },
      onEnterBack: () => { console.log('enterback'); polygons_stack.pause();  polygons_back.reverse() },
      onLeave: () => { console.log('leave'); polygons_stack.pause(); polygons_back.play(0) },
      onLeaveBack: () => { console.log('leaveback'); polygons_back.pause(); polygons_stack.reverse() }
    });
    
  gsap.set(polygons, {scale: 1, xPercent: 0, y: 0})

}
export { focusAnimation }