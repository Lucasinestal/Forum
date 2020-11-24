import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../apiCalls'
import Header from './../components/header'
import styled from 'styled-components'
import dateFormat from 'dateformat';
import { Button } from '../components/btnRegister';
import Loader from 'react-loader-spinner'
import { regex, Capitalize } from './../pages/PostDetail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'




const PostContainer = styled.div`
height: 50px;
padding: 10px;
display:flex;
align-items:center;
text-align: start;
justify-content: space-between;
box-shadow: 0 8px 6px -6px black;
margin-bottom: 10px;
@media (max-width: 650px) {
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    text-align: start;
}


`

const FirstContainer = styled.div`


`
const ContentWrapper = styled.div`
    display: flex;
    padding: 25px 10px;
    justify-content: space-between;
    @media (max-width: 640px) {
        flex-direction: column;
        padding: 10px;
    }
`



const DescContainer = styled(FirstContainer)`
justify-content: space-between;
display: flex;
height: 30px;
padding: 10px 70px 0px 70px;
border-bottom: 1px solid black;
@media (max-width: 640px) {
    flex-direction: column;
    padding: 15px;
}

p {
    @media (max-width: 640px) {
        margin: 1px;
    }
}
`
const StyledLink = styled(Link)`
color: #747474;

`
const ButtonLink = styled(Link)`
&:hover {
    border:none;
  }
`

const ListItem = styled.p`
margin: 0px 5px;
@media (max-width: 650px) {
    align-self: start;
    text-transform: "ellipsis"
}
`

const RecentPostsH = styled.h2`
@media (max-width: 640px) {
   text-align: center;
   width: 100%;
   margin: 15px 0px;
}
`

const PostBtn = styled(Button)`
    margin: 0px 20px;
    display:flex;
    font-size: 15px;
    border: 1px solid #FF652F;
    @media (max-width: 640px) {
        display: flex;
        padding: 15px;
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 5px auto;
    }

&:hover {
    background-color: #272727;
    color: #FF652F;
    border: 1px solid #FF652F;
}


`

export default function PostList() {

    const [postsData, setPostsData] = useState(null)

    useEffect(() => {
        fetchPosts()
        .then( res => res.json())
        .then((data) => {
            setPostsData(data.results)
        })
      },[]);
      if(postsData){

        return ( 
            <> 
            <Header />
            <div>
                <ContentWrapper>
                <RecentPostsH>Recent Posts</RecentPostsH>
                <ButtonLink to="/posts/create"><PostBtn to="/posts/create">Create New Post</PostBtn></ButtonLink>
                </ContentWrapper>
                <FirstContainer>
                    <DescContainer> <p>Title</p>  <p>Last updated</p> </DescContainer>
                </FirstContainer>
                {postsData && postsData.map((post, index) => {
                if(post.isPinned === true){
                        return<StyledLink key={index} to={`/posts/${post.id}`}>
                                <PostContainer className="postContainer">
                                    
                                    {post.title.length > 55 ? (
                                        <ListItem > <FontAwesomeIcon icon={faThumbtack} /> {Capitalize(post.title.slice(0, 55).replace(regex, '') + "..." )}</ListItem>
                                    ): <ListItem > <FontAwesomeIcon icon={faThumbtack} /> {post.title}</ListItem>}
                                <ListItem >{dateFormat(`${post.updatedAt}`, "mmmm dS, yyyy HH:MM")+ ".."}</ListItem>
                                </PostContainer>
                            </StyledLink>

                } else {
                return <StyledLink key={index} to={`/posts/${post.id}`}>
                        <PostContainer className="postContainer">
                        {post.title.length > 55 ? (
                            <ListItem >{Capitalize(post.title.slice(0, 55).replace(regex, '')) +"..."  }</ListItem>
                        ):  <ListItem >{Capitalize(post.title.replace(regex, '')) }</ListItem>  }
                        <ListItem >{dateFormat(`${post.updatedAt}`, "mmmm dS, yyyy HH:MM")}</ListItem>
                        </PostContainer>
                    </StyledLink>
                }                   
                })}
            
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
            timeout={3000} //3 secs
    
         />
        )
        
      }
    


}

