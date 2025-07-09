import './App.css'
import {UserFilter} from './UserFilter'
import { UserTable } from './UserTable'
import type { User } from './data'

function App() {

  const users: User[] = [
    {name: 'Vojta', age: 41},
    {name: 'John', age: 1},
  ]
  return (
    <>
      <UserFilter/>
      <UserTable users={users}/>
    </>
  )
}

export default App
