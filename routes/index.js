const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");


module.exports = (app) =>{
  userRoutes(app),
  authRoutes(app)
}