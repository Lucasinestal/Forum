import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display:flex;
    flex-direction: flex-row;
    aLign-items: center;
    height: 50px;
    border-bottom: 4px soLid #FF652F;
    width: 100%;
    margin: 0;
    justify-content: flex-end;
`
const Ul = styled.ul`
display:flex;
flex-direction: flex-row;
List-style: none;`

const Li = styled.li`
color:#FF652F;
margin: 10px;
font-family: 'Quicksand-medium', sans-serif;
`

const Wrapper = styled.div`
display: flex;
justify-content: end;`

const ForumDiv = styled.div`
width: 100%;
margin: 10px;
`
export default function Header() {
            
    return (
        <Wrapper>
        <HeaderContainer>
        <ForumDiv>
            <h2>Forum</h2>
        </ForumDiv>
        <div>
            <Ul>
                <Link to="/login"><Li>Login</Li></Link>
            </Ul>
        </div>
        </HeaderContainer>
        </Wrapper>
    )
}
