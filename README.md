> **Warning**: Not maintained, use [ignr](https://github.com/z0al/ignr) instead.

# Handy `.gitignore` generator

> Check [handy-gi](https://github.com/ahmed-taj/handy-gi) package for the programmatic version

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Build Status](https://travis-ci.org/ahmed-taj/handy-gi-cli.svg?branch=master)](https://travis-ci.org/ahmed-taj/handy-gi-cli)
[![Greenkeeper badge](https://badges.greenkeeper.io/ahmed-taj/handy-gi-cli.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm](https://img.shields.io/npm/v/handy-gi-cli.svg)](https://npm.im/handy-gi-cli)

A tool that automatically generates a suitable `.gitignore` file that fits your needs by detecting the directory contents, OS, Text editors and so on ...etc.

It utilizes official GitHub’s [collection] `.gitignore` templates.

## Installation

```sh
$ npm install -g handy-gi-cli
```

## Usage

```sh
$ gi --help

  Usage: gi <command> [options]


  Commands:

    ignore <dir>  generate .gitignore file

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Supported templates

Check [templates] folder to see which of the GitHub's [collection] templates are
currently supported.

[collection]: https://github.com/github/gitignore

[templates]: https://github.com/ahmed-taj/handy-gi/blob/master/templates

## License

MIT © [Ahmed Tajelsir](https://github.com/ahmed-taj)
