import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function bgGradients(){

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
          onEnter: () => { fadeToBlueDown.play(0); console.log('in'); },
          onEnterBack: () => { fadeToWhiteDown.reverse(1); console.log('backin'); },
          onLeave: () => { fadeToWhiteDown.play(0); console.log('out'); },
          onLeaveBack: () => { fadeToBlueDown.reverse(1); console.log('backwardsback'); },
          // markers: true

        })
        
        section.style.setProperty("--wp--preset--color--synthesis-blue", "transparent"); 

        // let yStart, yEnd;
        // yStart = section.offsetTop - ( window.innerHeight * .5 );
        // yEnd = section.offsetTop + ( section.offsetHeight - window.innerHeight * .5 );
        
        
        // window.addEventListener('resize', () => {
        //   yStart = section.offsetTop - ( window.innerHeight * .5 );
        //   yEnd = section.offsetTop + ( section.offsetHeight - window.innerHeight * .5 );
        // })
        
        // //check if pagescroll is on a blue background already 
        // if ( !document.body.classList.contains('bluesection-'+(index + 1)) && window.scrollY >= yStart && window.scrollY <= yEnd ) {
        //   document.body.classList.add('bluesection-'+(index + 1));
        // } else if ( window.scrollY > yEnd || window.scrollY < yStart ){
        //   document.body.classList.remove('bluesection-'+(index + 1));
        // }
        
        // window.addEventListener('scroll', () => {
        //   if ( !document.body.classList.contains('bluesection-'+(index + 1)) && window.scrollY >= yStart && window.scrollY <= yEnd ) {
        //     document.body.classList.add('bluesection-'+(index + 1));
        //   } else if ( window.scrollY > yEnd || window.scrollY < yStart ){
        //     document.body.classList.remove('bluesection-'+(index + 1));
        //   }
        // })
      })
    }
  }
  init();
}
export { bgGradients }