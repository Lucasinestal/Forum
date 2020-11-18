import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../apiCalls'

export default function PostList() {

    const [postsData, setPostsData] = useState(null)

    useEffect(() => {
        fetchPosts()
        .then( res => res.json())
        .then((data) => {
            setPostsData(data.results)
        })
      },[]);

    return (
        <div>
            <Link to="/posts/create"><button>Create Post</button></Link>
            {postsData && postsData.map((post, index) => {
            return <div key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <Link to={`/posts/${post.id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            })}
        </div>
    )
}
