function bgGradients(){
  
  /* detect up or down scrolling */
  // var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

  // window.onscroll = function() {
  //   var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  //   if ( previousPosition > currentPosition ) {
  //     if ( !document.body.classList.contains('scrolling-up') ){
  //       document.body.classList.add('scrolling-up');
  //     }
  //     if ( document.body.classList.contains('scrolling-down') ) {
  //       document.body.classList.remove('scrolling-down');
  //     }
  //   } 
  //   else {
  //     if ( !document.body.classList.contains('scrolling-down') ) {
  //       document.body.classList.add('scrolling-down');
  //     }
  //     if ( document.body.classList.contains('scrolling-up') ) {
  //       document.body.classList.remove('scrolling-up');
  //     }
  //   }

  //   previousPosition = currentPosition;
  // };

  function init(){
    let bggrad = document.createElement('div');
    bggrad.classList.add('bg-grad');
    document.body.appendChild(bggrad);

    let bluesections = document.querySelectorAll('.has-synthesis-blue-background-color');
    
    if ( bluesections.length ) {

      bluesections.forEach( function(section, index){
        
        section.style.setProperty("--wp--preset--color--synthesis-blue", "transparent"); 

        let yStart, yEnd;
        yStart = section.offsetTop - ( window.innerHeight * .5 );
        yEnd = section.offsetTop + ( section.offsetHeight - window.innerHeight * .5 );
        
        
        window.addEventListener('resize', () => {
          yStart = section.offsetTop - ( window.innerHeight * .5 );
          yEnd = section.offsetTop + ( section.offsetHeight - window.innerHeight * .5 );
        })
        
        //check if pagescroll is on a blue background already 
        if ( !document.body.classList.contains('bluesection-'+(index + 1)) && window.scrollY >= yStart && window.scrollY <= yEnd ) {
          document.body.classList.add('bluesection-'+(index + 1));
        } else if ( window.scrollY > yEnd || window.scrollY < yStart ){
          document.body.classList.remove('bluesection-'+(index + 1));
        }
        
        window.addEventListener('scroll', () => {
          if ( !document.body.classList.contains('bluesection-'+(index + 1)) && window.scrollY >= yStart && window.scrollY <= yEnd ) {
            document.body.classList.add('bluesection-'+(index + 1));
          } else if ( window.scrollY > yEnd || window.scrollY < yStart ){
            document.body.classList.remove('bluesection-'+(index + 1));
          }
        })
      })
    }
  }
  init();
}
export { bgGradients }