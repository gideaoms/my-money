module.exports = (sequelize, DataTypes) => {
  const BalanceUpdate = sequelize.define('BalanceUpdate', {
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATEONLY
  });
  BalanceUpdate.associate = function({ Investment }) {
    this.belongsTo(Investment);
  };
  return BalanceUpdate;
};
