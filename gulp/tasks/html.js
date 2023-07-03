import fileInclude from 'gulp-file-include';
//INFO added webp format
import webpHtmlNoSVG from 'gulp-webp-html-nosvg';
//INFO non cashing in browser
import versionNumber from 'gulp-version-number';
//INFO minification html
import htmlmin from 'gulp-htmlmin';

//INFO collect parts of html into one file.
export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(fileInclude('@@'))
    .pipe(app.plugins.replace(/@assets\//g, 'assets/'))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNoSVG()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: '0',
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(
      htmlmin({
        //TODO add delete comments
        collapseWhitespace: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
