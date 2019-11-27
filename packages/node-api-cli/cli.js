#!/usr/bin/env node
const argv = require('yargs').argv

var commands = {
    "make:seeder": require('./command/make-seeder'),
    "make:migration": require('./command/make-migration'),
    "migrate": require('./command/migrate'),
    "migrate:rollback": require('./command/migrate-rollback'),
}

async function  runCommand(params) {
    var command_name = argv._[0];
    if (commands[command_name] != undefined) {
        await commands[command_name].handel(argv);
    }else{
        throw `Command ${command_name} not found`;
    }
}

runCommand();
