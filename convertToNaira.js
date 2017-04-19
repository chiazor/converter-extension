
// converts dollar_value to naira using money.js library
function conversion(dollar_value){
  var naira_value = fx.convert(dollar_value);
  return naira_value;
}

// replaces all inner html texts (dollar values) with naira values
function convertToNaira(){
document.body.innerHTML = document.body.innerHTML.replace(/\$([\d,]+(?:\.\d+)?)/g,
 function (string, c1) {
    //If there are commas, get rid of them and record they were there
    var comma = c1.indexOf(',') != -1;
    c1 = c1.replace(/,/g, '');
    //Parse and double and round off to nearest integer
    c1 = Math.round(parseFloat(c1));
    var value = '' + Math.round(conversion(c1));
    //Reinsert commas if they were there before
    if (comma) {
        var split = value.split(".");
        value = split[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
        if(split.length > 1)
            value += "."+split[1];
    }
    //Return with dollar sign prepended
    return '<span> &#8358</span>' + value;
});
}

// recieves messages about button click from background.js
// and then runs convertToNaira() function
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.message === "clicked_browser_action"){
      convertToNaira();
    }
  }
)
