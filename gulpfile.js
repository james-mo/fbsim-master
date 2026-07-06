var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var tsify = require("tsify");
var fancy_log = require("fancy-log");
var paths = {
  pages: ["src/*.html"],
};

function newBundler() {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/worker/index.ts"],
    cache: {},
    packageCache: {},
  }).plugin(tsify);
}

function bundle(bundler) {
  return bundler
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
}

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

// one-shot build: writes dist/bundle.js once and exits
gulp.task(
  "build",
  gulp.series(gulp.parallel("copy-html"), function build() {
    return bundle(newBundler());
  })
);

// dev loop: rebuilds dist/bundle.js on every save, stays running
gulp.task(
  "watch",
  gulp.series(gulp.parallel("copy-html"), function watch() {
    var watched = watchify(newBundler());
    watched.on("update", function () {
      bundle(watched);
    });
    watched.on("log", fancy_log);
    return bundle(watched);
  })
);

gulp.task("default", gulp.series("watch"));
