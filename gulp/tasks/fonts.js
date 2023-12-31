import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  //INFO searching file .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}).pipe(
    app.plugins
      .plumber(
        app.plugins.notify.onError({
          title: 'F O N T S *.otf',
          message: 'Error: <%= error.message %>',
        })
      )
      //INFO convert to .ttf
      .pipe(fonter({ formats: ['ttf'] }))
      //INFO upload to srcFolder
      .pipe(app.gulp.dest(app.path.src.fonts))
  );
};

export const ttfToWoff = () => {
  //INFO searching file .otf
  // return app.gulp.src(app.path.src.fonts, { allowEmpty: true }).pipe(
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}).pipe(
    app.plugins
      .plumber(
        app.plugins.notify.onError({
          title: 'F O N T S *.ttf',
          message: 'Error: <%= error.message %>',
        })
      )
      //INFO convert to .woff
      .pipe(fonter({ formats: ['woff'] }))
      //INFO upload to srcFolder
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      //INFO searching files .ttf
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      // .pipe(app.gulp.src(app.path.src.fonts))
      // INFO convert to .woff2
      .pipe(ttf2woff2())
      //INFO upload to folder result
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  );
};

export const fontsStyle = () => {
  //INFO style file connection fonts
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  //INFO checking fonts files
  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      //INFO checking file style for connection fonts
      if (!fs.existsSync(fontsFile)) {
        //INFO if not exist -> create file
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          //INFO write connection fonts to file style
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0]
              ? fontFileName.split('-')[0]
              : fontFileName;
            let fontWeight = fontFileName.split('-')[1]
              ? fontFileName.split('-')[1]
              : fontFileName;
            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === 'extrabold' ||
              fontWeight.toLowerCase() === 'heavy'
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              // `@font-face {
              //         font-family: ${fontName};
              //         font-display: swap;
              //         src: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");
              //         font-weight: ${fontWeight};
              //         font-style: normal;
              //     }\r\n`,
              // `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.ttf") format("ttf");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,

              cb
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        //INFO file exist -> to console
        console.log(
          'File scss/fonts.scss already exist. For update file you must delete this file!'
        );
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};
