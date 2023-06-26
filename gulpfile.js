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
import { svg } from './gulp/tasks/svg.js';
import { svgsprite } from './gulp/tasks/svgsprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';
//INFO transfer the value to the global variable
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp,
  path,
  plugins,
};

export { svgsprite };
//INFO watcher for src
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html); //gulp.series(html,ftp)
  gulp.watch(path.watch.scss, scss); //gulp.series(scss,ftp)
  gulp.watch(path.watch.js, js); //gulp.series(js,ftp)
  gulp.watch(path.watch.assets, gulp.series(assets, svg)); //gulp.series(assets, svg,ftp)
};

//INFO work with fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//INFO main task
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, assets, svg)
);

//INFO construction of task performance scenarios.
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//INFO export scenarios
export { dev, build, deployZIP };
//INFO execution of the script by default.
gulp.task('default', dev);
