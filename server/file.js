const cheerio = require('cheerio');
const fs = require('fs')
const path = require('path')

const $ = cheerio.load(fs.readFileSync(path.resolve(__dirname,'../static/html/index.html')));

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

// $.html();

console.log($('.cms-editable').text())