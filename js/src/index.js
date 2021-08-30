import './components/navigation';
import { bgGradients } from './components/bg-gradients';
import { focusAnimation } from './components/focus-animation';
import { cookieConsent } from './components/cookie-consent';

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