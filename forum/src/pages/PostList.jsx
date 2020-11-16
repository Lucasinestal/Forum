import React,{useState, useEffect} from 'react'

const root_url = "https://lab.willandskill.eu"

export default function PostList() {
    const postsPath = `${root_url}/api/v1/forum/posts/`;
    const [postsData, setPostsData] = useState(null)

    function fetchPosts(){
        fetch(postsPath)
        .then( res => res.json())
        .then( data => setPostsData(data))
        .then(console.log(postsData))
    }

    useEffect( () => {
        fetchPosts()
    },[])
    
    return (
        <div>
            <h1>Post List Page</h1>
        </div>
    )
}
