const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config.js') // make sure .js is included if using Node.js CommonJS
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js' && file.endsWith('.js')
  )
  .forEach((file) => {
    const modelDef = require(path.join(__dirname, file)) //new for sequelize v6 or higher
    const model = modelDef(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

// Add this if you plan to use associations (like belongsTo, hasMany, etc.)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
