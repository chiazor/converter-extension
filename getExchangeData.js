// gets exchange data from api using jquery
$.getJSON(
    	// NB: using Open Exchange Rates here, but you can use any source!
        'https://openexchangerates.org/api/latest.json?app_id=0dd4b83391854ed2898d3f5308ea5848',
        function(data) {
            // Check money.js has finished loading:
            if ( typeof fx !== "undefined" && fx.rates ) {
                fx.rates = data.rates;
                fx.base = data.base;
            } else {
                // If not, apply to fxSetup global:
                var fxSetup = {
                    rates : data.rates,
                    base : data.base
                }
            }
        }
    );
