var program = require('commander')
var packageJson = require('./package.json')

// Initilize CLI options
program
  .version(packageJson.version)
  .usage('<command> [options]')

// Process Commands
program.parse(process.argv)
