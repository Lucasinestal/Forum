import React,{useEffect, useState} from 'react'
import {fetchPostDetails} from '../apiCalls'
import BtnCreate from './../components/btnCreate'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat';
import Modal from './../components/modal'
import Header from './../components/header'
import {createReply} from '../apiCalls'
import BtnRegister from './../components/btnRegister'
import Loader from 'react-loader-spinner'


export default function PostDetail(props) {
    const [parent, setParent] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [postDetails, setPostDetails] = useState({});
    const [state, setState] = useState({
        title: "",
        content: ""
    })

  
    function handleChange(event) {
      const value = event.target.value
      console.log(parent)
      console.log(state)
      setState({
          ...state,
      [event.target.name]: value
      });
      
    }function handleSubmit(event){
      setParent(props.location.pathname)
      event.preventDefault();
      const payload = {
          ...state,
          parent 
      };    
          try{
              createReply(payload)
              .then((res) => {
                  if(res.status === 400){
                      res.json().then((data) => {
                          event.target.reset();
                          console.log(data)
                          //setErrorMsg("Unable to publish reply with provided information")
                      });
                      return;
                  }
                  res.json().then((data) => {
                      console.log(data)
                      window.location.reload();
                  });
              });
          } catch(err){
              console.log("error:" + err)
          }

        }
    
    useEffect( () => {
      fetchPostDetails(props.location.pathname)
        .then( res => res.json())
        .then((data) => {
            setPostDetails(data)
            var id = props.location.pathname.slice(7);
            setParent(id)
        })
      },[props.location.pathname]);
    
    if(postDetails.author){
      const formatDate = dateFormat(`${postDetails.updatedAt}`, "mmmm dS, yyyy HH:MM")
      
      return (
        <>
        <div>
         {isOpen ? (
                  <Modal 
                  toggle={() => setIsOpen(!isOpen)}
                  title="title"
                  content="content"
                  value={state}
                  handleChange={handleChange}
                  onClick={handleChange}
                  submit={handleSubmit}
                  type="submit"
                  text="Publish"
                  />
                  
              ): null }
          
            <Header />
              <Link to="/posts">
                  <BtnCreate
                    text={"All Posts"}
                ></BtnCreate>
              </Link>
              <h1>{postDetails.title}</h1>
              <p>{postDetails.author.firstName} {postDetails.author.lastName} {formatDate} ID: {postDetails.author.id} </p>
              <p>{postDetails.content}</p>
              <p>Post ID: {postDetails.id} Responses: {postDetails.countResponses} Views: {postDetails.viewCount}</p>
              <BtnRegister onClick={() => setIsOpen(!isOpen)} text="Reply"></BtnRegister>
              <div>
              {postDetails.responses &&  postDetails.responses.map((responses, index) => {
                const formatResponseData = dateFormat(`${responses.createdAt}`, "mmmm dS, yyyy HH:MM")
                
                  return (
                    <div key={index}>{responses.author.firstName} {responses.author.lastName} {formatResponseData} ID: {responses.author.id}
                    <p>{responses.title}</p>
                    <p>{responses.content}</p>
                    </div>
                  )})}
              </div>
          </div>
          </> 
      )
  } else {
      return (
        <Loader className="loader"
            type="Audio"
            color="#FF652F"
            height="25vh"
            width="25wv"
            timeout={3000} //3 secs
    
         />
      )
    }
  }
