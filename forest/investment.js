const forestAdmin = require("forest-express-sequelize");

forestAdmin.collection("Investment", {
  fields: [
    {
      field: "fullName",
      type: "String",
      get(object) {
        return `${object.name} (${object.Broker.name})`;
      }
    }
  ]
});
