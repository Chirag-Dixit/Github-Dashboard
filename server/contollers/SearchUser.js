const SearchUser=require('../models/SearchUser');
const Repo=require('../models/Repo');

exports.searchUsers=async(req,res)=>{
    const searchTerm = req.query.q; // Get search term from query parameter

    try {
      // Call GitHub API to search for accounts matching the search term
      const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
  
      // Extract matching accounts from the GitHub API response
      const matchingAccounts = response.data.items.map(async item => {
        try {
          // Call GitHub API to get detailed information about the user
          const userDetailsResponse = await axios.get(item.url);
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
  
          // Save repositories to the database
          await Repo.insertMany(repositories);
  
          return {
            username: userDetails.login,
            // Add other fields from userDetails as needed
            repositories: repositories
          };
        } catch (error) {
          console.error(`Error fetching user details: ${error.message}`);
          return null;
        }
      });
  
      // Save matching accounts to database
      const savedAccounts = await Promise.all(matchingAccounts);
      const filteredAccounts = savedAccounts.filter(account => account !== null); // Filter out null accounts
  
      await SearchUser.insertMany(filteredAccounts);
  
      res.json({ message: 'Accounts saved successfully' });
    } catch (error) {
      console.error(`Error searching GitHub accounts: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}