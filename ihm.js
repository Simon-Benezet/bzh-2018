var service = require('./service')
var readline = require('readline');
var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
exports.start = function () {

    do{
        console.log('*************************')
        console.log('1. Rafraichir les données');
        console.log('2. Lister les sessions')
        console.log('99. Quitter')

        var saisie = menu.question(function (saisie) {
            console.log(`${saisie}`);
            if (saisie == 1) {
                console.log("1");
            }
            if (saisie == 2) {
                console.log("2");
                // service.init(function (nb) {
                //     console.log('[init]', nb, 'sessions trouvées.')
                // })
            }
            else {
                console.log("recommencer");
            }
            menu.close();
            return saisie;
        })
    }while(saisie != 99 && saisie != null);
}
