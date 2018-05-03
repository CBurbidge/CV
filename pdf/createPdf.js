
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    //headless: false,
   slowMo: 250 // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  await page.pdf({path: 'cv.pdf', format: 'A4'});

  await browser.close();
})();
