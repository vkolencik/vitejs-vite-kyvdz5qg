import type { User } from "./data"

interface UserTableProps {
  users: User[]
}

export const UserTable = (props: UserTableProps) => (
  <table className="w-full table-auto border-collapse text-sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody className="bg-white dark:bg-gray-800">
      {props.users.map(u => (
        <tr className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400" key={u.email}>
          <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">{u.name}</td>
          <td>{u.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
