import '../sass/styles.sass';
import { header } from './components/header'
import { liveFeed } from './components/liveFeed';
import { mobileSidebar } from './components/mobileSidebar';

if (__IS_DEV__) {
  import('../pug/pages/index.pug')
  import('../pug/components/_header.pug')
  import('../pug/components/_header-profile.pug')
}

header();
mobileSidebar();
liveFeed();