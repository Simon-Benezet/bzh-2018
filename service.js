//tableau qui contendra toutes les sessions du BreizhCamp
let talks = [];
const request = require('request-promise-native');

let Urls = ['http://2018.breizhcamp.org/json/talks.json', 'http://2018.breizhcamp.org/json/others.json']
module.exports = class Service {
    constructor() {
        this.talks = []
    }

    init() {
        return Promise.all(
            Urls.map(url => request(url, { json: true })))
            .then(tab => {
                this.talks = tab[0].concat(tab[1]);
                return this.talks.length
            })
    }

    listerSessions() {
        return Promise.resolve(this.talks)
    }
}





//Avant ES2015
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


//ES2015
// exports.init = (nb) => {
//     return new Promise((resolve, reject) => {
//         request('http://2018.breizhcamp.org/json/talks.json',
//             { json: true }, (err, res, body) => {
//                 talks = body;
//                 request('http://2018.breizhcamp.org/json/others.json',
//                     { json: true }, (err, res, body2) => {
//                         talks = talks.concat(body2);
//                         if (err) {
//                             reject(err)
//                         } else {
//                             resolve(console.log(talks.length))
//                         }
//                     })
//             })
//     })
// }

// exports.listerSessions = () => {
//     return new Promise((resolve, reject) => {
//         if (false) {
//             reject("les données n'ont pas été récupéré");
//         } else {
//             resolve(talks.forEach(element => {
//                 console.log(`${element.name}, (Speakers : ${element.speakers})\n`);
//             }))
//         }

//     })
// }