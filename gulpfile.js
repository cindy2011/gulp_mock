var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var mock = require('./mock.js');
gulp.task('fcopy', function() {
    //文件copy
    gulp.src('src/**/*.*') //src下面所有目录文件
        //让文件流走向下一个环节
        .pipe(gulp.dest('dist/')); //dest指定文件输出地方

});
gulp.task("jsbabel", function() {
    return gulp.src("src/**/*.js") // ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});

gulp.task('server', ['fcopy'], function() {

    browserSync.init({
        server: "./src/",
        middleware: mock.data()
    });
    gulp.watch("src/**/*.js", ['jsbabel']);
    gulp.watch("src/*.html").on('change', reload);
});