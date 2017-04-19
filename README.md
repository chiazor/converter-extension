# converter-extension
This a browser extension for chrome that converts Dollar prices on a webpage to Naira, using the exchange rates gotten from openexchangerates.com

Author: Osayamen Osareting
Email: superyamen@gmail.com

To use this extension(while I find the money to get a developer account):
  1. Put all the files in a single folder
  2. Open Chrome, then go the the extension page (chrome://extensions)
  3. Enable developer mode by clicking the toggle button on the top right
  4. The blue icon will appear next to the address icon
  5. Use on any page that has dollar prices and they'd become Naira prices.

manifest.json: Compulsory json file for chrome extensions, tells Chrome everything about the extensions, including the content and background
scripts

convertToNaira.js: content script that contains the actual application logic. Converts prices to naira and replaces them on the web page

getExchangeData.js: collects exchange rates for api using jquery

background.js: collects user click on browser_action. sends messages to main content script (convertToNaira.js)

jquery-3.2.1.min.js: jquery library

money.js: Library that handles currency conversion
