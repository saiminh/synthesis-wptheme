import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin);

function sideScrollNavigation(){

  toggleSideScrollNav();
  
  function toggleSideScrollNav() {
      
    let scrollers = document.querySelectorAll('.sideScroll-scroller, .blocks-gallery-grid');
      
    scrollers.forEach( (scroller) => {
      let oneScrollW = scroller.childNodes[1].getBoundingClientRect().width;
      let maxScrollW = scroller.scrollWidth - scroller.clientWidth;
      let nextBtn, prevBtn;
      if ( !scroller.parentElement.querySelector('.sideScroll-scroller-nav-scrollNext') ) {
        nextBtn = document.createElement('div');
        nextBtn.classList.add('sideScroll-scroller-nav-scrollNext');
        prevBtn = document.createElement('div');
        prevBtn.classList.add('sideScroll-scroller-nav-scrollPrev');
        scroller.parentElement.append(nextBtn, prevBtn);
      } else {
        nextBtn = scroller.parentElement.querySelector('.sideScroll-scroller-nav-scrollNext');
        prevBtn = scroller.parentElement.querySelector('.sideScroll-scroller-nav-scrollPrev');
      }
    
      window.addEventListener('resize', () => {
        oneScrollW = scroller.childNodes[1].getBoundingClientRect().width;
        maxScrollW = scroller.scrollWidth - scroller.clientWidth;
      } );

      scroller.scrollTo(0,0);
      let lastBefore = maxScrollW - ( ( maxScrollW / oneScrollW ) - Math.floor(maxScrollW / oneScrollW) ) * oneScrollW;
    
      nextBtn.addEventListener('click', nextBtnHandler); 
    
      let nextSlideX = 0;

      function nextBtnHandler() {
        
        function reAddListenerNextBtn() {
          console.log(nextSlideX);
          nextBtn.addEventListener( 'click', nextBtnHandler );
        }
        
        nextBtn.removeEventListener('click', nextBtnHandler); 
        scroller.style.scrollSnapType = 'none';
        
        
        for( let i=0; i <= scroller.children.length; i++ ){
          if ( scroller.children[i].getBoundingClientRect().x > 0 ) {
            nextSlideX = Math.round(scroller.children[i].getBoundingClientRect().x) + 1;
            break;
          }
        }

        if ( scroller.scrollLeft == maxScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: 0 }, ease: 'power3.out', onComplete: () => { reAddListenerNextBtn(); } })
        } 
        else if ( scroller.scrollLeft >= maxScrollW - oneScrollW ) {
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out', onComplete: () => { reAddListenerNextBtn(); } })
        } 
        else {
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: scroller.scrollLeft + nextSlideX }, ease: 'power3.out', onComplete: () => { reAddListenerNextBtn(); } })
        }
      }

      prevBtn.addEventListener('click', prevBtnHandler);

      function prevBtnHandler() {
      
        function reAddListener() {
          // scroller.style.scrollSnapType = 'x mandatory';
          console.log('newscrollpos: ' + scroller.scrollLeft);
          prevBtn.addEventListener( 'click', prevBtnHandler );
        }
      
        prevBtn.removeEventListener( 'click', prevBtnHandler );
        scroller.style.scrollSnapType = 'none';

        for( let i=0; i <= scroller.children.length; i++ ){
          if ( scroller.children[i].getBoundingClientRect().x > 0 ) {
            nextSlideX = scroller.children[i].getBoundingClientRect().x;
            break;
          } 
        }
      
        if ( scroller.scrollLeft <= 10 ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: maxScrollW }, ease: 'power3.out', onComplete: () => { reAddListener() } })
        } else if ( scroller.scrollLeft == maxScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: lastBefore }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        } else if ( scroller.scrollLeft <= oneScrollW ){
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: 0 }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        } else {
          gsap.to(scroller, { duration: .5, scrollTo: { y: 0, x: scroller.scrollLeft - nextSlideX }, ease: 'power3.out' , onComplete: () => { reAddListener() } })
        }      
      }

      if ( scroller.scrollWidth > window.innerWidth ) {
        scroller.parentElement.classList.add('showNavBtns');
      } else {
        scroller.parentElement.classList.remove('showNavBtns');
      }

    })
  }   
}
export { sideScrollNavigation };