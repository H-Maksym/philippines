//INFO Search and replace
import replace from 'gulp-replace';
//INFO error handling
import plumber from 'gulp-plumber';
//INFO messages (hints)
import notify from 'gulp-notify';
//INFO local server
import browserSync from 'browser-sync';
//INFO checking update
import newer from 'gulp-newer';
//INFO checked condition for node.mode
import ifPlugin from 'gulp-if';

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  if: ifPlugin,
};
