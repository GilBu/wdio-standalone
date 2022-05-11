const { remote } = require('webdriverio');


(async () => {
  const browser = await remote({
    port: 9515,
    // path: '/',
    capabilities: {
      browserName: 'chrome',
      // 'goog:chromeOptions': {
      //   binary: '/usr/bin/google-chrome',
      //   args: ['--headless', '--disable-gpu'],
      // }
    }
  });

  await browser.url('https://webdriver.io');

  const title = await browser.getTitle();
  console.log('Title was: ' + title);

  await browser.deleteSession();
})().catch((e) => console.error(e));