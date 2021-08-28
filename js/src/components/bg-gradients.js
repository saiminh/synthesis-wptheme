import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function bgGradients(){
  
  let fadeinItems = document.querySelectorAll('video');
  if ( fadeinItems.length ) {
    fadeinItems.forEach( (item) => {
      gsap.set(item, { autoAlpha: 0 });
      item.addEventListener('loadeddata', () => {
        // alert('loaded');
        gsap.to(item, { autoAlpha: 1, duration: 3, ease: 'power4.out'})
      })
    } )
  };

  function init(){
    let bggrad = document.createElement('div');
    bggrad.classList.add('bg-grad');
    document.body.appendChild(bggrad);

    let bluesections = document.querySelectorAll('.has-synthesis-blue-background-color');

    let fadeToBlueDown = gsap.timeline({ paused: true })
      .fromTo('.bg-grad', {
        yPercent: 0,
      },{
        yPercent: -50,
        duration: .66,
        ease: "Power2.out",
      }, 0)
      .fromTo('#logo-fill', {
        yPercent: 0,
      },{
        yPercent: 66.666,
        ease: "Power2.out",
        duration: .5
      }, 0);
              
    let fadeToWhiteDown = gsap.timeline({ paused: true })
      .fromTo('.bg-grad', {
        yPercent: -50,
      },{
        yPercent: -100,
        duration: .66,
        ease: "Power2.out"
      }, 0)
      .fromTo('#logo-fill', {
        yPercent: 66.666,
      },{
        yPercent: 0,
        ease: "Power2.out",
        duration: .5
      }, 0);

    gsap.set('.bg-grad', {
      yPercent: 0
    })

    if ( bluesections.length ) {

      bluesections.forEach( function(section, index){

        ScrollTrigger.create( {
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => { fadeToWhiteDown.pause(); fadeToBlueDown.play(0); console.log('in'); },
          onEnterBack: () => { fadeToBlueDown.pause(); fadeToWhiteDown.reverse(1); console.log('backin'); },
          onLeave: () => { fadeToBlueDown.pause(); fadeToWhiteDown.play(0); console.log('out'); },
          onLeaveBack: () => { fadeToWhiteDown.pause(); fadeToBlueDown.reverse(1); console.log('backwardsback'); },
          // markers: true
        })
        section.style.setProperty("--wp--preset--color--synthesis-blue", "transparent"); 
      })
    }
  }
  init();
}
export { bgGradients }