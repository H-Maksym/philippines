//INFO create webp format
import webp from 'gulp-webp';

//INFO compress images
import imagemin from 'gulp-imagemin';

export const assets = async () => {
  app.gulp
    .src(app.path.src.assets)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'ASSETS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.assets))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.assets))
    .pipe(app.gulp.src(app.path.src.assets))
    .pipe(app.plugins.newer(app.path.build.assets))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 to 7
      })
    )
    .pipe(app.gulp.dest(app.path.build.assets))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.assets))
    .pipe(app.plugins.browserSync.stream());
};
