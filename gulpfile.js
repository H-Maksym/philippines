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
};

//INFO main task
const mainTasks = gulp.parallel(copy, html, scss, js);

//INFO construction of task performance scenarios.
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//INFO execution of the script by default.
gulp.task('default', dev);
