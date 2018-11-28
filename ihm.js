var service = require('./service')
var readline = require('readline');
exports.start = function () {
    Menu()
    function Menu() {
        console.log('*************************')
        console.log('1. Rafraichir les données');
        console.log('2. Lister les sessions')
        console.log('99. Quitter')

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
                service.listerSessions(function () {
                    console.log('[init]', nb, 'sessions trouvées.')
                })
                menu.close();
            }

            if (`${saisie}` != 99) {
                menu.close();
            }
            Menu()
        })
    }
}