import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // Array destruction
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')} >Todos</button>
      </div>
      <UserList ></UserList>
      <ResourceList resource={resource} ></ResourceList>
    </div>
  );
}

export default App;
