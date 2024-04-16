const express = require('express');
const axios = require('axios');
const SearchUser = require('./models/SearchUser'); // Import your SearchUser model
const Repo = require('./models/Repo'); // Import your Repo model
const router = express.Router();

const checkUserExists = async (req, res, next) => {
    const { username } = req.params;
    
    try {
        // Find the user in the database
        const user = await SearchUser.findOne({ username });
        
        if (!user) {
            try {
                // Call GitHub API to get detailed information about the user
                const userDetailsResponse = await axios.get(`https://api.github.com/users/${username}`);
                const userDetails = userDetailsResponse.data;

                // Get repositories of the user
                const repositoriesResponse = await axios.get(userDetails.repos_url);
                const repositories = repositoriesResponse.data.map(repo => ({
                    reponame: repo.name,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    openissues: repo.open_issues_count
                }));

                // Create a new SearchUser document for the user
                const newUser = new SearchUser({
                    username: userDetails.login,
                    repositories: repositories
                });

                // Save the new user to the database
                await newUser.save();
                
                // Continue to the next middleware or route handler
                next();
            } catch (error) {
                console.error(`Error fetching user details: ${error.message}`);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            // User exists in the database, continue to the next middleware or route handler
            next();
        }
    } catch (err) {
        console.error(`Error checking user existence: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = checkUserExists;
