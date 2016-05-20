'use strict';

const gulp    = require('gulp');
const cheerio = require('gulp-cheerio');

gulp.task('default', function () {
	return gulp.src(['src/**/*.html'])
	.pipe(cheerio({
		run: function ($) {
			/*
			 * ここに書き換えたい内容を記入
			 * 記述方法はhttps://github.com/cheeriojs/cheerioを参照
			*/
			$('body').prepend('<script src="hoge.js">');
		},
		parserOptions: {
			withDomLvl1: true,
			normalizeWhitespace: false,
			decodeEntities: false // これをtrueにすると日本語が文字化ける
		}
	}))
	.pipe(gulp.dest('dist/'));
});
