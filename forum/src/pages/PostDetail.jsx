import React,{useEffect, useState} from 'react'
import {fetchPostDetails} from '../apiCalls'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat';
import Modal from './../components/modal'
import Header from './../components/header'
import {createReply} from '../apiCalls'
import {Button } from './../components/btnRegister'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'


const MessageContainer = styled.div`
  margin: 15px 15px 5px 15px;
  border-radius: 15px;
`


const ReplyButton = styled(Button)`
margin: 0px;
width: 100%;
padding: 5px 15x;
font-size: 20px;
text-align: center;
display:flex;
justify-content: center;
border: none;
border-radius: 0px 0px 10px 25px;
box-shadow: none;

&:hover {
  background-color: #272727;
  border: 1px solid #FF652F;
  color: #FF652F;
}
`

const UserInfoH4 = styled.p`
  color: #747474;
  margin-left: 10px;
  font-size: 18px;
`

const MessageP = styled.p`
  padding: 0px 20px 20px;
`

const MessageTitle = styled.p`
  padding: 20px;   
`

const PostDetailsInfo = styled.p`
  padding: 10px;
  border-radius: 0px 0px 10px 25px;
  background-color: #272727;
  color: #747474;
  font-size: 14px;
  border-top: 1px solid #747474;
`

const ContentContainer = styled.div`
  border: 1px solid black;
  background-color: #272727;
  margin-top: 4px;
  border-radius: 10px 25px 10px 25px;
  box-shadow: 0 8px 6px -6px black;
`

const ReplyContainer = styled(MessageContainer)`

`

const ReplyContentContainer = styled(ContentContainer)`
  border: 1px solid black;
  background-color: #272727;
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 6px -6px black;
  
`

export const regex = /(<([^>]+)>)/ig;

export function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

export default function PostDetail(props) {

  


    const [parent, setParent] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [postDetails, setPostDetails] = useState(null);
    const [state, setState] = useState({
        title: "",
        content: ""
    })

  
    function handleChange(event) {
      const value = event.target.value
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
                      });
                      return;
                  }
                  res.json().then((data) => {
                      window.location.reload();
                  });
              });
          } catch(err){
              console.log("error:" + err)
          }

        }
    
    useEffect( () => {
      console.log(props.location.pathname)
      fetchPostDetails(props.location.pathname)
        .then( res => res.json())
        .then((data) => {
            setPostDetails(data)
            var id = props.location.pathname.slice(7);
            setParent(id)
            console.log(parent)
        })
      },[props.location.pathname]);
    
    if(postDetails){
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
              </Link>
              <MessageContainer>
                {postDetails.author ?(
                    <UserInfoH4>{postDetails.author.firstName} {postDetails.author.lastName} User-Id:{postDetails.author.id} | {dateFormat(`${postDetails.createdAt}`, "mmmm dS, yyyy HH:MM")}</UserInfoH4>
                ): <UserInfoH4> No Author | {dateFormat(`${postDetails.createdAt}`, "mmmm dS, yyyy HH:MM")}</UserInfoH4> }
                <ContentContainer>
                {postDetails.isPinned ? (
                     <MessageTitle><FontAwesomeIcon icon={faThumbtack} /> <strong>{ Capitalize(postDetails.title.replace(regex, ''))}</strong></MessageTitle>
                  ): <MessageTitle><strong>{ Capitalize(postDetails.title.replace(regex, ''))}</strong></MessageTitle> }

                  <MessageP>{postDetails.content.replace(regex, '')}</MessageP>
                  {postDetails.userSubscribed ? (
                    <PostDetailsInfo>{postDetails.category.title} | Post ID: {postDetails.id} | <FontAwesomeIcon icon={faCommentDots} /> {postDetails.countResponses}  | <FontAwesomeIcon icon={faEye} /> {postDetails.viewCount} | Last updated: {dateFormat(`${postDetails.updatedAt}`, "mmmm dS, yyyy HH:MM")} | Subscribed: Yes</PostDetailsInfo>
                  ): <PostDetailsInfo>{postDetails.category.title} | Post ID: {postDetails.id} | <FontAwesomeIcon icon={faCommentDots} /> {postDetails.countResponses}  | <FontAwesomeIcon icon={faEye} /> {postDetails.viewCount} | Last updated: {dateFormat(`${postDetails.updatedAt}`, "mmmm dS, yyyy HH:MM")} | Subscribed: No </PostDetailsInfo>}
                  
                  {postDetails.isClosed ? (
                     <ReplyButton onClick={() => setIsOpen(!isOpen)} disabled >Thread is Closed</ReplyButton>
                  ): <ReplyButton onClick={() => setIsOpen(!isOpen)} >Reply</ReplyButton>}
                </ContentContainer>
              </MessageContainer>
              <div>
              {postDetails.responses &&  postDetails.responses.map((responses, index) => {
                const formatResponseData = dateFormat(`${responses.createdAt}`, "mmmm dS, yyyy HH:MM")
                
                  return (
                    <ReplyContainer key={index}>
                        <UserInfoH4>{Capitalize(responses.author.firstName)} {Capitalize(responses.author.lastName)} User-Id: {responses.author.id} | {formatResponseData}</UserInfoH4>
                        <ReplyContentContainer>
                        <MessageTitle><strong>{Capitalize(responses.title.replace(regex, ''))}</strong></MessageTitle>
                        <MessageP>{responses.content.replace(regex, '')}</MessageP>
                        </ReplyContentContainer>
                    </ReplyContainer>
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
            width="100%"
            timeout={3000}
         />
      )
    }
  }
