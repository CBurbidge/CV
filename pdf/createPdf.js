
const puppeteer = require('puppeteer');

var baseUrl = 'http://localhost:5000';

(async () => {
  const browser = await puppeteer.launch({
    //headless: false,
   slowMo: 250 // slow down by 250ms
  });
  const page = await browser.newPage();
  
  // base pdf
  await page.goto(baseUrl);
  await page.pdf({path: 'cv.pdf', format: 'A4'});
  
  // winops pdf
  await page.goto(baseUrl + "/?type=winops");
  await page.pdf({path: 'cv-winops.pdf', format: 'A4'});

  await browser.close();
})();
