const mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');
// let postcssImport = require('postcss-import');


mix.js('resources/js/app.js', 'public/js');
mix.postCss('resources/css/main.css', 'public/css', [
    tailwindcss('./tailwind.js'),
  ]);