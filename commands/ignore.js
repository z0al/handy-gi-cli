const fs = require('fs')
const { join } = require('path')

const gi = require('handy-gi')
const isGitDir = require('../lib/git')

var ignore = (program) => {
  program
    .command('ignore <dir>')
    .description('generate .gitignore file')
    .action((dir) => {
      // Resolve dir (e.g. relative?)
      dir = fs.realpathSync(dir)

      // Is it git repository?
      if (!isGitDir(dir)) {
        console.log('Error: <dir> must point to a git repository')
        return
      }

      console.log('Processing: ', dir)

      gi.ignore(dir)
        .then(data => {
          const file = join(dir, '.gitignore')

          fs.writeFile(file, data, (err) => {
            if (err) throw err

            console.log('The file has been saved!')
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
}

module.exports = ignore
