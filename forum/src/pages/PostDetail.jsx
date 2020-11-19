import React,{useEffect, useState} from 'react'
import {fetchPostDetails} from '../apiCalls'
import BtnCreate from './../components/btnCreate'
import { Link } from 'react-router-dom'

export default function PostDetail(props) {
    const [postDetails, setPostDetails] = useState({});
    const [postReplies, setPostReplies] = useState({});
    
    useEffect( () => {
      const id = props.location.pathname
      fetchPostDetails(id)
        .then( res => res.json())
        .then(  (data) => {
            setPostDetails(data)
            console.log(data)
        })
        /*fetchPostDetails(id)
          .then( res => res.json())
          .then( (data) => {
            setPostReplies(data)
            console.log(data)
          })*/
      },[]);

    if(postDetails.author){
      return (
          <div>
              <Link to="/posts">
                  <BtnCreate
                    text={"All Posts"}
                ></BtnCreate>
              </Link>
              <h1>{postDetails.title}</h1>
              <p>{postDetails.content}</p>
              <p>{postDetails.updatedAt} {postDetails.author.firstName} {postDetails.author.lastName}</p>
              <div>
                {postReplies.content}
              {postDetails.responses && postDetails.responses.map((responses, index) => {
                  return (
                    <div key={index}>{responses.author.email}
                    <p>{responses.title}</p>
                    <p>{responses.content}</p>
                    </div>
                  )})}
              </div>
          </div>
      )
  } else {
      return (
        <p>Loading..</p>
      )
    }
}