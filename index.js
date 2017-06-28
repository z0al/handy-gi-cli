var program = require('commander')
var packageJson = require('./package.json')

// Load sub-commands
require('./commands')(program)

// Initilize CLI options
program
  .version(packageJson.version)
  .usage('<command> [options]')

// Process Commands
program.parse(process.argv)

// Print help if no sub-command is passed
if (program.args.length === 0) {
  program.help()
}
