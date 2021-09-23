import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin);

function sideScrollNavigation(){
  
  function toggleSideScrollNav() {
      
    let scrollers = document.querySelectorAll('.sideScroll-scroller, .blocks-gallery-grid');
      
    scrollers.forEach( (scroller) => {
      scroller.scrollTo({
        x: 0, y: 0, behavior: 'smooth'
      })
      let current
      let nScrollItems = scroller.childNodes.length;
      let oneScrollW = scroller.childNodes[3].getBoundingClientRect().width;
      let maxScrollW = scroller.scrollWidth - scroller.clientWidth;
      let maxFullItems = Math.floor(scroller.offsetWidth / oneScrollW);
      let lastX = ( nScrollItems - maxFullItems - 1 ) * oneScrollW;
      let nextBtn, prevBtn;
      if ( !scroller.parentElement.querySelector('.sideScroll-scroller-nav-scrollNext') ) {
        nextBtn = document.createElement('div');
        nextBtn.classList.add('sideScroll-scroller-nav-scrollNext');
        prevBtn = document.createElement('div');
        prevBtn.classList.add('sideScroll-scroller-nav-scrollPrev');
        scroller.parentElement.append(nextBtn, prevBtn);
      } else {
        nextBtn = scroller.querySelector('.sideScroll-scroller-nav-scrollNext');
        prevBtn = scroller.querySelector('.sideScroll-scroller-nav-scrollPrev');
      }
  
    
      let lastBefore = maxScrollW - ( ( maxScrollW / oneScrollW ) - Math.floor(maxScrollW / oneScrollW) ) * oneScrollW;
    
      nextBtn.addEventListener('click', nextBtnHandler); 
    
      function nextBtnHandler() {
        
        function reAddListener() {
          scroller.style.scrollSnapType = 'x mandatory';
          nextBtn.addEventListener( 'click', nextBtnHandler );
        }
        
        nextBtn.removeEventListener('click', nextBtnHandler); 
        scroller.style.scrollSnapType = 'none';
        
        if ( scroller.scrollLeft == maxScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: -10 }, ease: 'power3.out', onComplete: () => { reAddListener() } })
        } else if ( scroller.scrollLeft >= maxScrollW - oneScrollW ) {
          // lastBefore = scroller.scrollLeft;
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out', onComplete: () => { reAddListener() } })
        } else {
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: "+="+ oneScrollW }, ease: 'power3.out', onComplete: () => { reAddListener() } })
        }
      }

      prevBtn.addEventListener('click', prevBtnHandler);

      function prevBtnHandler() {
      
        function reAddListener() {
          scroller.style.scrollSnapType = 'x mandatory';
          prevBtn.addEventListener( 'click', prevBtnHandler );
        }
      
        prevBtn.removeEventListener( 'click', prevBtnHandler );
        scroller.style.scrollSnapType = 'none';
      
        if ( scroller.scrollLeft <= 10 ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out', onComplete: () => { reAddListener() } })
        } else if ( scroller.scrollLeft == maxScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: lastBefore }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        } else if ( scroller.scrollLeft <= oneScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: 0 }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        } else {
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: "-=" + oneScrollW }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        }      
      }

      if ( scroller.scrollWidth > window.innerWidth ) {
        scroller.parentElement.classList.add('showNavBtns');
      } else {
        scroller.parentElement.classList.remove('showNavBtns');
      }

    })
  }

  window.addEventListener('resize', () => toggleSideScrollNav() );
  toggleSideScrollNav();
   
}
export { sideScrollNavigation };