var fs = require('fs')
var path = require('path')

var onlyCommands = (filename) => {
  return (
    /\.js$/.test(filename) &&
    !/\.test\.js$/.test(filename) &&
    filename !== 'index.js'
  )
}

module.exports = (program) => {
  var commands = {}

  // List commands files
  var filesList = fs.readdirSync(__dirname).filter(onlyCommands)

  for (let filename of filesList) {
    var name = filename.substr(0, filename.lastIndexOf('.'))
    // Require command
    var command = require(path.join(__dirname, filename))

    // Initialize command
    commands[name] = command(program)
  }

  return commands
}
