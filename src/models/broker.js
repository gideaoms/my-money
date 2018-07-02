module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define("Broker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Broker.associate = function({ Investment }) {
    this.hasMany(Investment);
  };
  return Broker;
};
