import React from "react";
import { useState, useEffect } from "react";
import './config.css'
const MultipleFetchData = () => {
  const [users, setUsers] = useState([]);
  const [randomUser, setRandomUser] = useState({});

  const url = 'https://api.github.com/users';

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  const randomIndex = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const user = users[randomIndex];
    const userProfile = {
      id:user.id,
      typeaccount: user.type,
      login: user.login,
      avatar_url: user.avatar_url,
      nodeid: user.node_id,
    };
    setRandomUser(userProfile);
  }

  return (
    <div>
      <h1>Random User</h1>
      {randomUser && (
        <div>
          <img src={randomUser.avatar_url} alt={randomUser.login} className="avatar" />
          <h2>{randomUser.name}</h2>
          <p>ID : {randomUser.id}</p>
          <p>Login Name : {randomUser.login}</p>
          <p>Node: {randomUser.location}</p>
          <p>Type Account : {randomUser.typeaccount}</p>
          <button type="button" className="btn" onClick={randomIndex}>Random index</button>
        </div>
      )}
    </div>
  );
};

export default MultipleFetchData;