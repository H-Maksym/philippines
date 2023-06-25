//INFO main module
import gulp from 'gulp';
//INFO import paths
import { path } from './gulp/config/path.js';

//INFO import plugins
import { plugins } from './gulp/config/plugins.js';

//INFO import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { assets } from './gulp/tasks/assets.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
//INFO transfer the value to the global variable
global.app = {
  gulp,
  path,
  plugins,
};

//INFO watcher for src
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.assets, assets);
};

//INFO work with fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//INFO main task
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, assets)
);

//INFO construction of task performance scenarios.
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//INFO execution of the script by default.
gulp.task('default', dev);
