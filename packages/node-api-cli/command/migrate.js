const tsc = require('node-typescript-compiler')

var fs = require('fs');
var path = require('path');
var shell = require('shelljs');


module.exports = {
    handel: async function (args) {

        
        var dir = path.resolve(process.cwd(), 'src', 'database', 'migrations');
        
        fs.readdir(dir, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            //listing all files using forEach
            files.forEach(function (file) {
                shell.exec(`yarn tsc -t es2017 --module CommonJS --outDir ./build-migrations/migrations ${path.resolve(dir, file)}`);
            });

            shell.exec('sequelize db:migrate')
        });

        

        // return tsc.compile({
        //     'help': true
        // })

    }
}


