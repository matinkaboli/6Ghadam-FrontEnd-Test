/* eslint-disable */

const gulp = require('gulp');
const del = require('del');
const lint = require('gulp-eslint');
const replace = require('gulp-replace');
const webpack = require('webpack');
const config = require('./src/config.js');

gulp.task('clean', cb =>
  del(
    'build/**',
    cb
  )
);

gulp.task('dev:copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static')),
    gulp.src(
      'server/index.js'
    )
    .pipe(gulp.dest('build'))
  ]
);

gulp.task('prod:copy', ['lint', 'clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static'))
  ]
);

gulp.task('dev:build', ['clean'], () => {
  webpack(require('./webpack/dev.js'), (err, stats) => {
    if (err) {
      throw new Error('webpack build failed', err);
    }

    console.log(stats.toString({
      assets: true,
      colors: true
    }));
  });
});

gulp.task('prod:build', ['lint', 'clean'], cb =>
  webpack(require('./webpack/prod.js'), (err, stats) => {
    if (err) {
      throw new Error('webpack build failed', err);
    }

    console.log(stats.toString({
      assets: true,
      colors: true
    }));
    cb();
  })
);

gulp.task('dev:replace', ['clean'], () =>
  gulp.src('server/index.html')
  .pipe(replace('@@CDN@@', config.devCDN))
  .pipe(gulp.dest('build'))
);

gulp.task('prod:replace', ['lint', 'clean'], () =>
  gulp.src('server/index.html')
  .pipe(replace('@@CDN@@', config.prodCDN))
  .pipe(gulp.dest('build'))
);

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('default', ['clean', 'dev:copy', 'dev:replace', 'dev:build']);
gulp.task('dev', ['clean', 'dev:copy', 'dev:replace', 'dev:build']);
gulp.task('prod', ['lint', 'clean', 'prod:copy', 'prod:replace', 'prod:build']);
