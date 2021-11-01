/*
- linting
- Dead code
- File/folder structure for components
- CSS modules
- DataIsLoaded unnecessary
- Error message displayed on page load before async req is done
- No Tests
- items not the best state variable name
- functional components > class components
*/
import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../service/fetchUsers';
import CardList from './CardList/CardList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      const { result, error } = await fetchUsers();
      if (error) setError(error);
      if (result) setUsers(result);
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        <h1>An error has occurred.</h1>
      </div>
    );
  }
  if (!users || users.length === 0) {
    return (
      <div>
        <h1>Fetching data.</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
};

export default App;
