const Users = require("../models/Users");

module.exports = {
  // Get all users method
  async getUsers(req, res) {
    try {
      const users = await Users.find().populate("friends").populate("thoughts");
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Get one user method
  async getOneUser(req, res) {
    try {
      const user = await Users.findOne({ _id: req.params.id })
        .populate("friends")
        .populate("thoughts");
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Create a user method
  async createUser(req, res) {
    try {
      const newUser = await Users.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const updateUser = await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          username: req.body.username,
          email: req.body.email,
        },
        { runValidators: true, new: true }
      );
      if (!updateUser) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Delete a user method
  async deleteUser(req, res) {
    try {
      const deletedUser = await Users.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
