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

if (__IS_DEV__) {
  import('../pug/pages/index.pug')
}

header();
sidebar();
liveFeed();
mobileMenu();
circleProgress();
initSliders();