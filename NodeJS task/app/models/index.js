//const { Sequelize } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://wmezzlhk:MhMBdHoNOhx-gC4XCI9-wtkDXbFRajwe@satao.db.elephantsql.com:5432/wmezzlhk');
async function connectionCheck() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectionCheck();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;