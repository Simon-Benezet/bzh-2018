var service = require('./service')

exports.start = function () {
    console.log('*************************')
    console.log('1. Rafraichir les données');
    console.log('2. Lister les sessions')
    console.log('99. Quitter')

    var readline = require('readline');
    var menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    menu.question("\nChoisissez une option : ", function (saisie) {
        if (`${saisie}` == 1) {
            service.init(function (nb) {
                console.log('[init]', nb, 'sessions trouvées.', '\n...Données mises à jour')
            });
            menu.close();
        }

        else if (`${saisie}` == 2) {
            service.listerSessions(function (nb) {
                console.log('[init]', nb, 'sessions trouvées.')
            })
            menu.close();
        }

        else if (`${saisie}` != 1 && `${saisie}` != 2) {
            menu.close();
        }

        if (`${saisie}` != 99) {
            
        }
    })
}