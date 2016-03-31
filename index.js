/**
 * Created by emccrystal on 31/03/2016.
 */

var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=52.587002,-0.239000";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $("[data-variable='temperature'] .wx-value").html();

        console.log("It’s " + temperature + " degrees Fahrenheit.");
    } else {
        console.log("We’ve encountered an error: " + error);
    }
});

