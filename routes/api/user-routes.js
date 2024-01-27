const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");
const {
  addFriend,
  removeFriend,
} = require("../../controllers/friendControllers");
//
// user routes
//
router.route("/").get(getUsers).post(createUser);
//
//
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);
//
// friend routes
//
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
