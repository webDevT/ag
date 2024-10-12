let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

// Очистка папки docs
gulp.task('clean', async function () {
    del.sync('docs');
});

// Обработка SASS файлов
gulp.task('sass', function () {
    return gulp.src('app/assets/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({ stream: true }));
});

// Обработка CSS файлов
gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css'
    ])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('libs.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({ stream: true }));
});

// Обработка HTML файлов
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }));
});

// Обработка JS файлов
gulp.task('script', function () {
    return gulp.src('app/assets/js/*.js')
        .pipe(browserSync.reload({ stream: true }));
});

// Настройка browser-sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// Экспорт файлов в папку docs
gulp.task('export', function () {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('docs'));

    let buildCss = gulp.src('app/assets/css/**/*.css')
        .pipe(gulp.dest('docs/assets/css'));

    let buildJs = gulp.src('app/assets/js/**/*.js')
        .pipe(gulp.dest('docs/assets/js'));

    let buildFonts = gulp.src('app/assets/fonts/**/*.*')
        .pipe(gulp.dest('docs/assets/fonts'));

    let buildImg = gulp.src('app/assets/img/**/*.*')
        .pipe(gulp.dest('docs/assets/img'));
});

// Наблюдение за изменениями в файлах
gulp.task('watch', function () {
    gulp.watch('app/assets/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/assets/*.html', gulp.parallel('html'));
    gulp.watch('app/assets/js/*.js', gulp.parallel('script'));
});

// Сборка проекта
gulp.task('build', gulp.series('clean', 'export'));

// Задача по умолчанию
gulp.task('default', gulp.parallel('css', 'sass', 'browser-sync', 'watch'));
