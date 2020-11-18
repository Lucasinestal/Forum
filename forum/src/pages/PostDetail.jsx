import React,{useEffect, useState} from 'react'
import {fetchPostDetails} from '../apiCalls'

export default function PostDetail(props) {
    const [postDetails, setPostDetails] = useState({});
    
    useEffect( () => {
      fetchPostDetails(props.location.pathname)
        .then( res => res.json())
        .then((data) => {
            setPostDetails(data)
        })
      },[]);

        

    return (
        <div>
            <h1>{postDetails.title}</h1>
            <p>{postDetails.content}</p>
            <p>{postDetails.updatedAt}</p>
           
        </div>
    )
}
