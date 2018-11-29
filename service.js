//tableau qui contendra toutes les sessions du BreizhCamp
let talks = [];
const request = require('request-promise-native');

// exports.init = callback => {
//     request('http://2018.breizhcamp.org/json/talks.json', { json: true }, (err, res, body) => {
//         if (err) { return console.log(`Erreur : ${err}`); }
//         talks = body;
//         request('http://2018.breizhcamp.org/json/others.json', { json: true }, (err, res, body2) => {
//             if (err) { return console.log(`Erreur : ${err}`); }
//             talks = talks.concat(body2);
//             callback(talks.length);
//             return talks;
//         });
//     });
// }

exports.init = (nb) => {
    return new Promise((resolve, reject) => {
        request('http://2018.breizhcamp.org/json/talks.json',
            { json: true }, (err, res, body) => {
                talks = body;
                
                request('http://2018.breizhcamp.org/json/others.json',
                    { json: true }, (err, res, body2) => {
                        talks = talks.concat(body2);
                        if (err) {
                            reject(err)
                        } else {
                            nb = talks.length
                            resolve(nb)
                        }
                    })
            })
    })
}


exports.listerSessions = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            reject("les données n'ont pas été récupéré");
        } else {
            resolve(talks.forEach(element => {
                console.log(`${element.name}, (Speakers : ${element.speakers})\n`);
            }))
        }

    })
}