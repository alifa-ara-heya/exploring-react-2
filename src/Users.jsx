import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);
    // empty array because this array will hold our data, if nothing loads, this array will still be there.

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setUsers(data))

     }, []);

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

// 1. declare a state to hold the data
// 2. useEffect with CallBack and dependency array. useEffect(callback function, dependency array)
// 3. Use fetch to load data