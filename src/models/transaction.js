module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    amount: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });
  Transaction.associate = function({ Investment }) {
    this.belongsTo(Investment);
  };
  return Transaction;
};
