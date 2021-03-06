'use strict'

const path = require('path')
const nconf = require('nconf')

const defaults = {

  port: 6000,

  mongo: {
    url: 'mongodb://localhost/link-analyzer',
  },

  redis: {
    host: 'localhost',
    port: 6379,
  },

  kue: {
    prefix: 'q',
  },

}

nconf
  .file({ file: path.join(__dirname, '..', 'config.json') })
  .env({ separator: '_', lowerCase: true })
  .defaults({ store: defaults })

module.exports = nconf
