import React, { useState } from 'react';
import axios from 'axios';

function GitHubProfile() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response,"res");
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">GitHub Profile Fetcher</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter GitHub username"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={fetchProfile}
          >
            Fetch Profile
          </button>
        </div>
      </div>
      {userData && (
        <div className="text-center">
          <h2>{userData.login}</h2>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="rounded-circle"
          />
          <p>Followers: {userData.followers}</p>
          <p>Repos: {userData.public_repos}</p>
          <p link="userData.repos_url
">GotoProfile</p>
        </div>
      )}
    </div>
  );
}

export default GitHubProfile;
