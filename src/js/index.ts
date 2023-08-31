import '../sass/styles.sass';
import { header } from './components/header'
import { liveFeed } from './components/liveFeed';
import { mobileMenu } from './components/mobileMenu';
import { sidebar } from './components/sidebar';

if (__IS_DEV__) {
  import('../pug/pages/index.pug')
  import('../pug/components/_header.pug')
}

header();
sidebar();
liveFeed();
mobileMenu();