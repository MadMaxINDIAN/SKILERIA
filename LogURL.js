const chalk = require('chalk')

module.exports = (req, status) => {
    var status_res = '';
    var method_res = '';
    if (Math.floor(status/100) === 2) {
        status_res = chalk.greenBright(req.originalUrl) + "\t" + chalk.green("[" +status + "]")
    } else if (Math.floor(status/100) === 3) {
        status_res = chalk.yellowBright(req.originalUrl) + "\t" + chalk.yellow("[" +status + "]")
    } else if (Math.floor(status/100) === 4) {
        status_res = chalk.redBright(req.originalUrl) + "\t" + chalk.red("[" +status + "]")
    }
    if (req.method === 'GET'){
        method_res = chalk.bgCyan(chalk.black(" " + req.method + " "))
    } else if (req.method === 'POST'){
        method_res = chalk.bgBlue(chalk.white(" " + req.method + " "))
    }
    console.log(method_res + "\t" +  status_res);
}