const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");


gulp.task("cssTask", function () {
    return gulp.src("./src/css/*.css")
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(concat("main.css"))
        .pipe(gulp.dest("./assets/css/"));
})
