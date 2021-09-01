import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function bgGradients(){
  
  //On load remove the page-reveal container
  window.addEventListener('DOMContentLoaded', (event) => {
    gsap.to('.page-reveal', {
      yPercent: -100,
      duration: 2
    })
  });

  document.querySelectorAll('a:not(.menu-toggle)').forEach(element => element.addEventListener("click", function(event) {
    // Remember the link href
    var href = this.href;

    // Don't follow the link
    event.preventDefault();
    // Do the async thing
      gsap.to( ".page-reveal", {
        duration: 1,
        yPercent: 0,
        onComplete: function(){window.location = href;}
      });
      gsap.to('#logo-fill', {
        yPercent: 0,
      });
      gsap.to('.main-navigation', {
        autoAlpha: 0
      })
  }));




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
      .addLabel('end');
    
    if ( document.querySelector('hr') ) {
      fade.to('hr, .wp-block-separator, .food-technology hr, .food-technology .wp-block-separator', {
        backgroundColor: "#FFFFFF"
      }, "start");
      fade.to('hr, .wp-block-separator, .food-technology hr, .food-technology .wp-block-separator', {
        backgroundColor: "#120A59"
      }, "middle");
    }
      

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