import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../apiCalls'
import Header from './../components/header'
import styled from 'styled-components'
import dateFormat from 'dateformat';
import BtnRegister,{ Button } from '../components/btnRegister';
import Loader from 'react-loader-spinner'


const PostContainer = styled.div`
height: 50px;
padding: 10px;
display:flex;
align-items:center;
text-align: start;
justify-content: space-between;
box-shadow: 0 8px 6px -6px black;
margin-bottom: 10px;

`

const FirstContainer = styled.div`


`
const ContentWrapper = styled.div`
display: flex;
padding: 25px 10px;
justify-content: space-between;
`


const DescContainer = styled(FirstContainer)`
justify-content: space-between;
display: flex;
height: 30px;
padding: 10px 70px 0px 70px;
border-bottom: 1px solid black;
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
`

const PostBtn = styled(Button)`
margin: 0px 20px;
display:flex;
font-size: 15px;
border: 1px solid #FF652F;

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
                <h2>Recent Posts</h2>
                <ButtonLink to="/posts/create"><PostBtn to="/posts/create">Create New Post</PostBtn></ButtonLink>
                </ContentWrapper>
                <FirstContainer>
                    <DescContainer> <p>Title</p>  <p>Last updated</p> </DescContainer>
                </FirstContainer>
                {postsData && postsData.map((post, index) => {
                return <StyledLink key={index} to={`/posts/${post.id}`}>
                        <PostContainer className="postContainer">
                            <ListItem >{post.title.slice(0, 55)}</ListItem>
                            <ListItem >{dateFormat(`${post.updatedAt}`, "mmmm dS, yyyy HH:MM")}</ListItem>
                        </PostContainer>
                    </StyledLink>
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
            width="25wv"
            timeout={3000} //3 secs
    
         />
        )
        
      }
    


}

