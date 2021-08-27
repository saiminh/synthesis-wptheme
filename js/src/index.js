import './components/navigation';
import { bgGradients } from './components/bg-gradients';
import { focusAnimation } from './components/focus-animation';

bgGradients();

if ( document.querySelector('.focus-alignment-animation-polygons .wp-block-image') ) {
  focusAnimation();
}