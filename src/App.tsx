import { useEffect, useState } from 'react';
import './App.css'
import { UserFilter } from './UserFilter'
import { UserTable } from './UserTable'
import { searchUsers, type User } from './data'
import { useQuery, useQueryClient } from '@tanstack/react-query';

function App() {
  const [search, setSearch] = useState('');

  const query = useQuery({ 
    queryKey: ['users', search],
    queryFn: () => searchUsers(search)    
   });

  return (<>
    <UserFilter onSearchUpdate={setSearch} />
    {query.isPending 
      ? "Loading..." 
      : <UserTable users={query.data ?? []} />
    }
  </>
  )
}

export default App
