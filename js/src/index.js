import './components/navigation';
import { bgGradients } from './components/bg-gradients';
import { focusAnimation } from './components/focus-animation';
import { cookieConsent } from './components/cookie-consent';
import "@lottiefiles/lottie-player";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

bgGradients();
cookieConsent();

if ( document.querySelector('.focus-alignment-animation-polygons .wp-block-image') ) {
  focusAnimation();
}

document.querySelectorAll('input[type="email"]').forEach( (input) => {
  input.style.backgroundColor = "#FFFFFF00";
  let ins = document.createElement('div');
  ins.classList.add('fake-text-input-bg');
  input.parentElement.insertBefore(ins, input);
});