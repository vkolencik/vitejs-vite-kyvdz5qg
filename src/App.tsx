import { useEffect, useState } from 'react';
import './App.css'
import {UserFilter} from './UserFilter'
import { UserTable } from './UserTable'
import { searchUsers, type User } from './data'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        searchUsers(query)
          .then(results => setUsers(results))
      },
      300);
      
      return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      <UserFilter onSearchUpdate={setQuery}/>
      <UserTable users={users}/>
    </>
  )
}

export default App
