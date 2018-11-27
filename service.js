//tableau qui contendra toutes les sessions du BreizhCamp
var talks = [];
var request = require('request');

//exports.init = function (callback) {
    request('http://2018.breizhcamp.org/json/talks.json',
        { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }
            // body contient les données récupérées
            console.log(body);
            talks = body;
            console.log(talks);
        });
    callback(body);
//};