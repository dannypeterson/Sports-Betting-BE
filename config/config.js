require('dotenv').config()
module.exports = {
  development: {
    database: 'betting_dev',
    dialect: 'postgres'
  },
  test: {
    database: 'betting_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
