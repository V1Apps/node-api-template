var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');
var changeCase = require('change-case');

Number.prototype.padLeft = function (base, chr) {
    var len = (String(base || 10).length - String(this).length) + 1;
    return len > 0 ? new Array(len).join(chr || '0') + this : this;
}

module.exports = {
    handel: async function (args) {

        if (!args._[1]) {
            throw 'Name of migration is required';
        }
        var name = args._[1];
        var dir = path.resolve(process.cwd(), 'src', 'database', 'migrations');

        var d = new Date();
        var dformat = [
            d.getFullYear(),
            (d.getMonth() + 1).padLeft(),
            d.getDate().padLeft()
        ].join('') + [
            d.getHours().padLeft(),
            d.getMinutes().padLeft(),
            d.getSeconds().padLeft()
        ].join("");

        var file_name = dformat + '-' + changeCase.paramCase(name) + ".ts";


        var config = {
            name: changeCase.pascalCase(name) + dformat,
            create: false,
            table_name: "tableName",
        };

        type = "alt";
        if (args.table) {
            config.table_name = args.table;
            config.create = false;
        }

        if (args.create) {
            config.table_name = args.create;
            config.create = true;
            type = 'create';
        }

        return new Promise(async function (resolve, reject) {

            await new Promise(async function (resolve, reject) {
                fs.mkdir(dir, { recursive: true }, function (err, data) {
                    if (err) reject(err);
                    resolve(data)
                })
            });

            fs.readFile(path.resolve(__dirname, '..', 'generator', (type == 'create' ? 'migration-create.tpl' : "migration-alt.tpl")), 'utf8', function (err, data) {
                if (err) reject(err);

                var result = nunjucks.renderString(data, config);

                fs.writeFile(path.resolve(dir, file_name), result, 'utf8', function (err) {
                    if (err) reject(err);
                    resolve()
                });
            });

        }).then(function () {
            console.log(path.resolve(dir, file_name));
            console.log("Migration has been successfully created");
        }).catch(function(error){
            throw error;
        })
    }
}


