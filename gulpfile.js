const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require('gulp-csso');
const server = require("browser-sync").create();
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const del = require("del");

gulp.task('css', () => {
  return gulp
    .src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('css-min', () => {
  return gulp
    .src('build/css/style.css')
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('js-min', () => {
  return gulp
    .src('source/js/*.js')
    .pipe(
      uglify()
    )
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/js"));
})

gulp.task('clean', () => {
  return del("build");
});

gulp.task('copy', function() {
  return gulp
    .src(
      [
        'source/*.html',
        'source/img/**/*{png,jpg,svg}',
        'source/fonts/**/*.{woff,woff2}',
        'source/*.ico'
      ],
      {
        base: 'source'
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task('copy-html', function() {
  return gulp
    .src(
      [
        'source/*.html',
      ],
      {
        base: 'source'
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task('server', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.task('refresh', (done) => {
    server.reload();
    done();
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css', 'css-min'));
  gulp.watch('source/*.html', gulp.series('copy-html', 'refresh'));
  gulp.watch("source/js/*.js", gulp.series('js-min', 'refresh'));
});

gulp.task('build', gulp.series('clean', 'copy', 'css', 'css-min', 'copy-html', 'js-min'));
gulp.task('start', gulp.series('build', 'server'));


gulp.task('dev-build', gulp.series('css', 'css-min', 'copy', 'copy-html', 'js-min'));
gulp.task('dev-start', gulp.series('dev-build', 'server'));
