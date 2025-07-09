import { useEffect, useState } from 'react';
import './App.css'
import {UserFilter} from './UserFilter'
import { UserTable } from './UserTable'
import { searchUsers, type User } from './data'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    searchUsers(query).then(results => setUsers(results))
  }, [query]);

  const search = (q: string) => {
    setQuery(q)
  }
    
  return (
    <>
      <UserFilter onSearchUpdate={q => search(q)}/>
      <UserTable users={users}/>
    </>
  )
}

export default App
