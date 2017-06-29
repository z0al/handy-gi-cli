const fs = require('fs')
const { join } = require('path')

const isGit = (dir) => {
  let gitDir = join(dir, '.git')
  try {
    let flag = fs.statSync(gitDir).isDirectory()
    return flag
  } catch (err) {
    return false
  }
}

module.exports = isGit
