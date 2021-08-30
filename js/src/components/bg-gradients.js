import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function bgGradients(){
  
  let fadeinVideo = document.querySelectorAll('video');
  if ( fadeinVideo.length ) {
    fadeinVideo.forEach( (item) => {
      gsap.set(item, { autoAlpha: 0 });
      item.addEventListener('canplay', () => {
        gsap.to(item, { autoAlpha: 1, duration: 3, ease: 'power4.out'})
      })
    } )
  };

  function init(){
    let bggrad = document.createElement('div');
    bggrad.classList.add('bg-grad');
    document.body.appendChild(bggrad);

    let bluesections = document.querySelectorAll('.has-synthesis-blue-background-color');

    let fade = gsap.timeline({ 
      paused: true,
      defaults: {
        duration: 2,
        ease: 'none',
      } 
    })
      .addLabel('start')
      .to('body', {
        color: "#FFFFFF",
      }, "start")
      .to('.bg-grad', {
        yPercent: -40,
      }, "start+=1.2")
      .to('#logo-fill', {
        yPercent: 66.666,
      }, "start")
      .addLabel('middle')
      .to('body', {
        color: "#120A59",
      }, "middle")
      .to('.bg-grad', {
        yPercent: -80,
      }, "middle+=1.2")
      .to('#logo-fill', {
        yPercent: 0,
      }, "middle")
      .addLabel('end')
      ;

    if ( bluesections.length ) {

      bluesections.forEach( function(section, index){

        ScrollTrigger.create( {
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          // onEnter: () => { fadeToWhiteDown.pause(); fadeToBlueDown.play(); },
          // onEnterBack: () => { fadeToBlueDown.pause(); fadeToWhiteDown.reverse(); },
          // onLeave: () => { fadeToBlueDown.pause(); fadeToWhiteDown.play(); },
          // onLeaveBack: () => { fadeToWhiteDown.pause(); fadeToBlueDown.reverse(); },
          onEnter: () => { fade.tweenTo('middle', {duration: 4, ease: 'power4.out'}) },
          onEnterBack: () => { fade.tweenTo('middle', {duration: 4, ease: 'power4.out'}) },
          onLeave: () => { fade.tweenTo('end', {duration: 4, ease: 'power4.out'}) },
          onLeaveBack: () => { fade.tweenTo('start', {duration: 4, ease: 'power4.out'}) },
          // markers: true
        })
        section.style.setProperty("--wp--preset--color--synthesis-blue", "transparent"); 
        section.style.setProperty("--wp--preset--color--white", "initial"); 
      })
    }
  }
  init();
}
export { bgGradients }