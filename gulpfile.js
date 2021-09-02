import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";
import concat from "gulp-concat";
import minifyJs from "gulp-minify";


gulp.task("cssTask", function () {
    return gulp.src("./src/css/*.css")
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(concat("main.css"))
        .pipe(gulp.dest("./assets/css/"));
})

gulp.task("img", function() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("assets/images"))
})

gulp.task("miniJs", function() {
    return gulp.src("./src/js/*.js")
        .pipe(minifyJs())
        .pipe(gulp.dest("assets/js"));
})
