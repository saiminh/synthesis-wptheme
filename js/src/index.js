import './components/navigation';
import { bgGradients } from './components/bg-gradients';
import { focusAnimation } from './components/focus-animation';
import { cookieConsent } from './components/cookie-consent';
import { sideScrollNavigation } from './components/side-scroll-navigation';
import "@lottiefiles/lottie-player";
// import 'lottie-web';

// The old fixed full height trick for mobile positioning with vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

bgGradients();
cookieConsent();

if ( document.querySelector('.focus-alignment-animation-polygons .wp-block-image') ) {
  focusAnimation();
}

// Hacking the polygon style appearance of input type email fields *sigh*
document.querySelectorAll('input[type="email"]').forEach( (input) => {
  input.style.backgroundColor = "#FFFFFF00";
  let ins = document.createElement('div');
  ins.classList.add('fake-text-input-bg');
  input.parentElement.insertBefore(ins, input);
});


if ( document.querySelector('.sideScroll-scroller') ) {
  sideScrollNavigation();
}