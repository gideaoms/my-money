'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define('Investment', {
    name: DataTypes.STRING
  });
  Investment.associate = function({ Broker, Transaction, BalanceUpdate }) {
    this.belongsTo(Broker);
    this.hasMany(Transaction);
    this.hasMany(BalanceUpdate);
  };
  return Investment;
};
