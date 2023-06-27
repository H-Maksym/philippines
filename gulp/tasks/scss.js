import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
//INFO rename files
import rename from 'gulp-rename';

//INFO compress css file
import cleanCSS from 'gulp-clean-css';
//INFO output webp images
import webpCSS from 'gulp-webpcss';
//INFO adds vendor prefixes
import autoprefixer from 'gulp-autoprefixer';
//INFO group media queries
import groupCSSMediaQueries from 'gulp-group-css-media-queries';
//INFO compress styles;
// import cssnano from 'cssnano';
//INFO tailwind
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss';
import options from '../../config.js'; //paths and other options from config.js

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(app.plugins.replace(/@assets\//g, '../assets/'))
      .pipe(
        sass({
          outputStyle: 'expanded',
        })
      )
      .pipe(postcss([tailwindcss(options.tailwind.tailwindjs)]))
      .pipe(app.plugins.if(app.isBuild, groupCSSMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpCSS({
            webpClass: '.webp',
            noWebpClass: '.no-webp',
          })
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true,
          })
        )
      )
      //INFO uncompressed styles file
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.if(app.isBuild, cleanCSS()))
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
