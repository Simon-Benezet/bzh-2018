var jsdom = require('jsdom');
var request = require('request');

var html = request('https://2018.breizhcamp.org/conference/speakers/', {},
    function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        var fs = require('fs');
        var pageHTML = fs.readFileSync(body).toString();

        var dom = new jsdom.JSDOM(pageHTML);
        var langs = dom.window.document.querySelectorAll("li");
        langs.forEach(function (lg) {
            console.log(lg.innerHTML);
        })
    });

    // récupération de la page HTML exemple 

    // var fs = require('fs');
    // var pageHTML = fs.readFileSync(html).toString();

    // var dom = new jsdom.JSDOM(pageHTML);
    // var langs = dom.window.document.querySelectorAll("li");
    // langs.forEach(function (lg) {
    //     console.log(lg.innerHTML);
    // })

