const Service = require('./service')
const readline = require('readline');
const service = new Service();

exports.start = function () {
    Menu()
    function Menu() {
        console.log('_________________________')
        console.log('1. Rafraichir les données')
        console.log('2. Lister les sessions')
        console.log('3. Lister les présentateurs')
        console.log('99. Quitter')

        let menu = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        menu.question("\nChoisissez une option : ", saisie => {
            if (`${saisie}` == 1) {
                service.init()
                    .then(nb => {
                        console.log(`[init] ${nb} sessions trouvées.\n...Données mises à jour`)
                    });
                menu.close();
            }

            else if (`${saisie}` == 2) {
                service.listerSessions()
                    .then(liste => liste.forEach(element => {
                        console.log(element.name)
                    }))
                menu.close();
            }

            else if (`${saisie}` == 3) {
                service.listerSessions()
                    .then(liste => liste.forEach(element => {
                        console.log(element.speakers)
                    }))
                menu.close();
            }

            if (`${saisie}` == 99) {
                menu.close();
                return console.log("vous avez quitté");
            }
            Menu()
        })
    }
}