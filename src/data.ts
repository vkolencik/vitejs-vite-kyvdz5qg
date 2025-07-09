export interface User {
    name: string;
    email: string;
}

export const searchUsers = (query: string): Promise<User[]> =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json() as Promise<User[]>)
        .then(users => users.filter(u => u.name.indexOf(query) >= 0 || u.email.indexOf(query) >= 0));

