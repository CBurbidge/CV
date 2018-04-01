
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    //headless: false,
   slowMo: 250 // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5000');
  
  await page.pdf({path: 'out.pdf', format: 'A4'});

  await browser.close();
})();


// var fs = require('fs');
// var pdf = require('html-pdf');
// //var html = fs.readFileSync('../react/build/index.html', 'utf8');
// var options = { format: 'Letter' };


// var wkhtmltopdf = require('wkhtmltopdf');
// // URL 
// wkhtmltopdf('http://localhost:5000/', { pageSize: 'letter', javascriptDelay: 10000 })
//   .pipe(fs.createWriteStream('./out.pdf'));



// var writeHtml = function(html){
//   pdf.create(html, options).toFile('./cv.pdf', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
//   });
// }

// //writeHtml("http://localhost:5000")



// var http = require("http");

// var options = {
//   host: 'localhost',
//   port: 5000,
//   path: '/',
//   method: 'GET'
// };




// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//     writeHtml(chunk);
   
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// req.end();

