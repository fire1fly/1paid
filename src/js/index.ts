import '../sass/styles.sass';

if (__IS_DEV__) {
  import('../pug/pages/index.pug')
}

console.log('HELLO WORLD');
console.log(__IS_DEV__);