import 'swiper/scss';
import 'tippy.js/animations/shift-away.css';
import 'swiper/scss'
import '../sass/styles.sass';
import { header } from './components/header'
import { liveFeed } from './components/liveFeed';
import { mobileMenu } from './components/mobileMenu';
import { sidebar } from './components/sidebar';
import { circleProgress } from './components/circleProgress';
import { initSliders } from './components/sliders';
import { scrollToTop } from './components/scrollToTop';
import { faq } from './components/faq';
import { productView } from './components/productView';

if (__IS_DEV__) {
  // import('../pug/pages/game-selected.pug')
  // import('../pug/pages/index.pug')
  // import('../pug/pages/my-achievements.pug')
  // import('../pug/pages/guarantees.pug')
  // import('../pug/pages/faq.pug')
  import('../pug/pages/my-notifications.pug')
}

header();
sidebar();
liveFeed();
mobileMenu();
circleProgress();
initSliders();
scrollToTop();
faq();
productView();