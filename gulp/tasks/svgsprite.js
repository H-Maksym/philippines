import svgSprite from 'gulp-svg-sprite';

// const config = {
//   shape: {
//     dimension: {
//       // Set maximum dimensions
//       maxWidth: 32,
//       maxHeight: 32,
//     },
//     spacing: {
//       // Add padding
//       padding: 10,
//     },
//     dest: 'out/intermediate-svg', // Keep the intermediate files
//   },
//   mode: {
//     view: {
//       // Activate the «view» mode
//       bust: false,
//       render: {
//         scss: true, // Activate Sass output (with default options)
//       },
//     },
//     symbol: true, // Activate the «symbol» mode
//   },
// };

export const svgsprite = async () => {
  app.gulp
    .src(`${app.path.src.svgsprite}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG SPRITES',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      // svgSprite(config)
      svgSprite({
        mode: {
          stack: {
            sprite: '../icons/sprite/sprite.svg',
            //INFO create html file with preview icons
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.assets}`));
};
