const Thoughts = require("../models/Thoughts");
const Users = require("../models/Users");

module.exports = {
  // Get all thoughts method
  async getThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Get one thought method
  async getOneThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.id });
      if (!thought) {
        res.status(404).json({ message: "Post not found" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Create a thought method
  async addThought(req, res) {
    try {
      const newThought = await Thoughts.create(req.body);
      const user = await Users.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: newThought._id } },
        { new: true }
      );
      res.json(newThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const updateThought = await Thoughts.findOneAndUpdate(
        { _id: req.params.id },
        {
          thoughtText: req.body.thoughtText,
        },
        { new: true }
      );
      if (!updateThought) {
        res.status(404).json({ message: "Post not found" });
      }
      res.json(updateThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Delete a thought method
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thoughts.findOneAndDelete({
        _id: req.params.id,
      });
      if (!deletedThought) {
        res.status(404).json({ message: "Post not found" });
      }
      res.json(deletedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
