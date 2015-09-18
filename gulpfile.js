var gulp = require('gulp');
var browserSync = require('browser-sync');
var argv = require('yargs').argv;

// $ gulp --proxy=http://192.168.1.67:4200 --port=8000 --uiPort=8001
var proxy = argv.proxy || 'http://localhost:4200';
var port = parseInt(argv.port || '9000', 10);
var uiPort = parseInt(argv.uiPort || '9001', 10);

gulp.task('default', ['serve']);

gulp.task('serve', [], function () {

  if (!proxy)
    throw 'proxy is not define. usage: $ gulp --proxy=http://192.168.1.67:4200';

  browserSync.init({
    proxy: proxy,
    port: port,
    ui: {
      port: uiPort
    }
  });
});
