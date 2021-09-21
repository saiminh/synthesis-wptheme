import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function sideScrollNavigation(){
  
  let scrollers = document.querySelectorAll('.sideScroll-scroller, .blocks-gallery-grid');
  
  scrollers.forEach( (scroller) => {
    let nScrollItems = scroller.childNodes.length, 
    oneScrollW = scroller.childNodes[1].offsetWidth,
    maxScrollW = scroller.scrollWidth - oneScrollW, 
    maxFullItems = Math.floor(scroller.offsetWidth / oneScrollW), 
    lastX = ( nScrollItems - maxFullItems - 1 ) * oneScrollW;
    
    let nextBtn = document.createElement('div');
    nextBtn.classList.add('sideScroll-scroller-nav-scrollNext');
    let prevBtn = document.createElement('div');
    prevBtn.classList.add('sideScroll-scroller-nav-scrollPrev');
  
    scroller.parentElement.append(nextBtn, prevBtn);
  
    function toggleSideScrollNav() {
      if ( scroller.scrollWidth > window.innerWidth ) {
        scroller.parentElement.classList.add('showNavBtns');
      } else {
        scroller.parentElement.classList.remove('showNavBtns');
      }
    }
    toggleSideScrollNav();
    window.addEventListener('resize', () => toggleSideScrollNav() );
    
    nextBtn.addEventListener('click', () => {
      scroller.style.scrollSnapType = 'none';
      if ( scroller.scrollLeft >= maxScrollW - oneScrollW ){
        gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out', onComplete: () => {    
          scroller.style.scrollSnapType = 'x mandatory'; 
        }, overwrite: true });
      } else {
        gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: "+="+ oneScrollW }, ease: 'power3.out', onComplete: () => {    
          scroller.style.scrollSnapType = 'x mandatory'; 
        }, overwrite: true });
      }
      
    });
    prevBtn.addEventListener('click', () => {
      scroller.style.scrollSnapType = 'none';
      if ( scroller.scrollLeft <= oneScrollW ){
        gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: 0 }, ease: 'power3.out', onComplete: () => {    
          scroller.style.scrollSnapType = 'x mandatory'; 
        }, overwrite: true });
      } else {
        gsap.to(scroller, { duration: .75, scrollTo: { y: 0, x: "-=" + oneScrollW }, ease: 'power3.out', onComplete: () => {    
          scroller.style.scrollSnapType = 'x mandatory'; 
        }, overwrite: true });
      }
    });
  } )
   
}
export { sideScrollNavigation };