// Intialize Modules/
// Import all the installed NPM Packages.
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');

// Use dart-sass for @Use/@Forward Syntax (For Importing Our Styles)
sass.complier = require('dart-sass');

// Sass Task (Function to Compile SASS Files)
function scssTask() {
    //    SourceeMaps --> // Enable us to see where a certain style is coming from when inspecting in browser
    return src('app/scss/style.scss', { sourcemaps: true })
        // Compile SASS to CSS
        .pipe(sass())
        // AutoPrefix Styles that are not supported by Older Browsers,Minify Our CSS Styles
        .pipe(postcss([autoprefixer(), cssnano()]))
        // Store the Complied SASS files
        // Location Of SourceMaps Same as our dist folder
        .pipe(dest('dist', { sourcemaps: '.' }));
}


// JavaScript Task (Function to Compile JS Files)
function jsTask() {
    return src('app/js/script.js', { sourcemaps: true })
        // Compile the new ES6 Syntax Code to a Version of Code that is Supported by All Browsers
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        // Minify Oour JS Files
        .pipe(terser())
        // Store the Compiled JS Files & SOurce maps location is same as dist folder.
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browser Sync Server
function browserSyncServe(cb) {
    browsersync.init({
        // To run the base directory of a server from the root location of gulp file
        server: {
            baseDir: '.'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: 0
            }
        }
    });
    // Callback function to indicate it is finished running
    cb();
}

// this function Reloads the server that we spun up
function browserSyncReload() {
    browsersync.reload();
    cb();
}

// Saying the function to watch our code files
function watchTask() {
    // Reload browser if changes happen in html files
    watch(".*html", browserSyncReload)
    // Watches our sass & js files and run scss Task ,JS Task & reload the browser if changes happen
    watch(['app/scss/**/*.scss', 'app/**/*.js'],
        series(scssTask, jsTask, browserSyncReload));
}


// default gulp task that will execute first
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

