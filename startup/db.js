const mongoose = require('mongoose');
const config = require('config')

module.exports = function() {
  const db = config.get('mongo.host');
  mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log(`connected to ${db}`)
    )
}