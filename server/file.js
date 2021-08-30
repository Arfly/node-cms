const cheerio = require('cheerio');
const fs = require('fs')
const path = require('path')

const $ = cheerio.load(fs.readFileSync(path.resolve(__dirname,'../static/html/index.html')));

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

// $.html();
// console.log($('.cms-editable'))
// $('.cms-editable').text('1111111')
// $('.cms-editable').text('1111111')
// console.log()

// fs.writeFileSync(path.resolve(__dirname, '../test.html'), $.html(), { encoding:'utf-8'})

const json = {}
$('.cms-editable').each((index,node)=>{
    // console.log(node.name, $(node).text().slice(0,20).replace(/\s/g,''))
    const text = $(node).text()
    json[`${node.name}-${index}`] = text

    console.log(node)
})

fs.writeFileSync(path.resolve(__dirname, '../test.json'), JSON.stringify(json), { encoding:'utf-8'})
// console.log(json)

