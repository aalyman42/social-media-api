const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers");
const {
  addReaction,
  removeReaction,
} = require("../../controllers/reactionControllers");
//
// thought routes
//
// router.route("/").get(getThoughts).post(addThought);
// //
// //
// router
//   .route("/:id")
//   .get(getOneThought)
//   .put(updateThought)
//   .delete(deleteThought);
// //
// // reation routes
// //
// router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
