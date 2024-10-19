import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {
    const [posts, SetPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => SetPosts(data))
    }, [])
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}


/* 
1. create a state to store the data, 
    const [Posts, SetPosts] = useState([])

    If the data is an object we will store it in an empty object. const [Posts, SetPosts] = useState({}). 
    if the data is a number the useState can be zero as a default value. 
    If it is a boolean value, true or false can be the default value. 
    SetPosts is a function.

2. Create useEffect with no dependencies. useEffect takes two parameters. 
3. Use fetch to load data


*/