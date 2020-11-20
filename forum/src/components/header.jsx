import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './../Auth';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display:flex;
    flex-direction: flex-row;
    aLign-items: center;
    height: 50px;
    border-bottom: 4px soLid #FF652F;
    width: 100%;
    margin: 0;
`
const Ul = styled.ul`
display:flex;
flex-direction: flex-row;
List-style: none;`

const Li = styled.li`
color:#FF652F;
margin: 5px;
font-family: 'Quicksand-medium', sans-serif;
`


export default function Header() {


     function logout(){
        Auth.signout();
        }

    return (
        <HeaderContainer>
        <h2>Forum</h2>

            <Ul>
                <Link to="/home"><Li>Home</Li></Link>
                <Link to="/posts"><Li>Posts</Li></Link>
                <Link to="/register"><Li>Register</Li></Link>
                <Link to="/login"><Li>Login</Li></Link>
                <Link to="/login"><Li onCLick={logout}>Logout</Li></Link>
            </Ul>
        </HeaderContainer>
    )
}
