//INFO compress images
import imagemin from 'gulp-imagemin';

export const svg = async () => {
  app.gulp
    .src(`${app.path.src.svg}`)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.svg))
    .pipe(
      imagemin({
        svgoPlugins: [{ removeViewBox: false }],
      })
    )
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(app.plugins.browserSync.stream());
};
