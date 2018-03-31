// keys.js - determine which credential set to return 
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod')
} else {
  // pull the dev keys in and immediately pass them back to whoever is asking for them
  module.exports = require('./dev')
}