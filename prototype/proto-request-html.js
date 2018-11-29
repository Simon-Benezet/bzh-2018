var request = require('request');

request('https://2018.breizhcamp.org/conference/speakers/', {}, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    console.log(body);
});