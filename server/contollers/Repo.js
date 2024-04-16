const express = require('express');
const Repo = require('../models/Repo');

const router = express.Router();


exports.repo=async (req, res) => {
  const { id } = req.params;

  try {
    const repository = await Repo.findById(id);
    if (!repository) {
      return res.status(404).json({ message: 'Repository not found' });
    }

    res.json(repository);
  } catch (error) {
    console.error(`Error fetching repository details: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}