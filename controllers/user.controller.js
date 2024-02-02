const Users = require("../models/user.model");

exports.updateUser = async (req, res) => {
  if (!req.params.userId) {
    return res.status(500).send({
      message: "User Id not provided"
    });
  }

  try {
    const userIdReq = req.userId; // from token

    const updateFields = {};
    if (req.body.name) updateFields.name = req.body.name;
    if (req.body.email) updateFields.email = req.body.email;
    if (req.body.userId) updateFields.userId = req.body.userId;
    if (req.body.password) updateFields.password = bcrypt.hashSync(req.body.password, 8);

    const user = await Users.findOneAndUpdate(
      { userId: userIdReq },
      updateFields,
      { new: true } // to return the updated document
    ).exec();

    if (!user) {
      return res.status(404).send({
        message: "User not found"
      });
    }

    res.status(200).send({
      message: "User record successfully updated",
      user: user
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      message: "Internal server error while updating user record"
    });
  }
};
