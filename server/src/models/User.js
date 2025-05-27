const bcrypt = require('bcryptjs')

async function hashPassword(user, options) {
  const SALT_ROUNDS = 8

  if (!user.changed('password')) return

  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  const hash = await bcrypt.hash(user.password, salt)
  user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword // Only one hook!
    }
  })

  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
  }

  return User
}
