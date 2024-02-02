/**
* ! Define the routes for the User response
*/

const userController = require("../controllers/user.controller");
const { authJwt } = require("../middlewares");


module.exports = (app) => {

  app.put("/app/api/v1/users/", [authJwt.verifyToken], userController.updateUser);
}
