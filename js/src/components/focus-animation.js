import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function focusAnimation(){

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let rotatingPolygons = document.querySelectorAll('.focus-alignment-animation-polygons .wp-block-image');
  gsap.set( rotatingPolygons, { transformOrigin: "50% 50%"});
  gsap.to( rotatingPolygons, {
    rotationZ: 360,
    duration: 18,
    repeat: -1,
    ease: "none"
  });
  let polygons_stack = gsap.timeline();
  
  function animationsetup(){
    let polygons = document.querySelectorAll('.focus-alignment-animation-polygons .wp-block-image');
    let animationCanvasH = document.querySelector('.focus-alignment-animation').offsetHeight;
    let animationCanvasW = document.querySelector('.focus-alignment-animation').offsetWidth;
    let headlineCenterY = animationCanvasH * 0.75 - document.querySelector('.focus-alignment-animation-polygons').offsetHeight * 0.5;
    let headlineCenterX = animationCanvasW * 0.5;
    let polygonCenterY = document.querySelector('.focus-alignment-animation-polygons .wp-block-image').offsetHeight * 0.5;
    let polygonCenterX = document.querySelector('.focus-alignment-animation-polygons .wp-block-image').offsetWidth * 0.5;
    let centerX = headlineCenterX - polygonCenterX;

    console.log( centerX * 1.1 );

    // gsap.set(polygons, { scale: 0, x: 0, y: 0 });
  
    polygons_stack = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
        ease: "linear"
      }
    })
    .addLabel('start')
    // First Polygon
    .fromTo(polygons[0], 
      { scale: 0 },
      { scale: 1 }, 'start' )
    .fromTo(polygons[0], 
      { x: 0 },
      { x: centerX * 1.1, ease: 'power1.in' }, 'start' )
    .fromTo(polygons[0], 
      { y: 0 },
      { y: -headlineCenterY - polygonCenterY * 0.75, ease: 'power1.out' }, 'start' )
    // Second Polygon
    .fromTo(polygons[1], 
      { scale: 0 },
      { scale: 1 }, 'start' )
    .fromTo(polygons[1], 
      { x: 0 },
      { x: centerX * 0.2, ease: 'power1.in' }, 'start' )
    .fromTo(polygons[1], 
      { y: 0 },
      { y: -headlineCenterY + polygonCenterY * 0.5 , ease: 'power1.out' }, 'start' )
    // Third Polygon
    .fromTo(polygons[2], 
      { scale: 0 },
      { scale: 1 }, 'start' )
    .fromTo(polygons[2], 
      { x: 0 },
      { x: centerX * -1.2, ease: 'power1.out' }, 'start' )
    .fromTo(polygons[2], 
      { y: 0 },
      { y: -headlineCenterY + polygonCenterY * 0.2, ease: 'power1.in' }, 'start' )
    
    .addLabel('stacked')
    .to(polygons[0], 
      { scale: 1, x: 0, ease: 'power1.in' }, 'stacked' )
    .to(polygons[0], 
      { y: 0, ease: 'power1.out'}, 'stacked' )
    .to(polygons[1], 
      { scale: 1, x: 0, ease: 'power1.in' }, 'stacked' )
    .to(polygons[1], 
      { y: 0, ease: 'power1.out'}, 'stacked' )
    .to(polygons[2], 
      { scale: 1, x: 0, ease: 'power1.in' }, 'stacked' )
    .to(polygons[2], 
      { y: 0, ease: 'power1.out'}, 'stacked' )
    
    .addLabel('end');
  };

  ScrollTrigger.create({
    trigger: '.focus-alignment-animation',
    start: 'top 50%',
    end: '60% 50%',
    // markers: true,
    onEnter: () => { polygons_stack.tweenFromTo('start', 'stacked', { duration: 1, ease: 'power3.out' }) },
    onEnterBack: () => { polygons_stack.tweenFromTo('end','stacked', { duration: 1, ease: 'power3.out' }) },
    onLeave: () => { polygons_stack.tweenFromTo('stacked', 'end', { duration: 1, ease: 'power3.out' }) },
    onLeaveBack: () => { polygons_stack.tweenFromTo('stacked', 'start', { duration: 1, ease: 'power3.out' }) }
  });

  
  window.addEventListener('resize', () => {
    polygons_stack.kill();
    debounce( animationsetup(), 250 );
  })
  animationsetup();
}
export { focusAnimation }