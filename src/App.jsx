import React from 'react';
import UserAPI from './UserAPI';

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>My React App</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      <hr />
      <UserAPI />
    </div>
  );
}

export default App;