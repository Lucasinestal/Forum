import React,{useEffect, useState, useContext} from 'react'
import { fetchMe } from './../apiCalls'
import Rules from './../Rules'
import styled from 'styled-components'
import Header from './../components/header'
import { UserContext } from '../UserContext'

const HomeWrapper = styled.div`
    display:flex;
    flex-direction: column;
`

const UserContainer = styled.div`
padding: 20px;
`

export default function Home() {

    const {userDetails, setUserDetails} = useContext(UserContext);

    useEffect(() => {
        if(!userDetails){
            fetchMe()
            .then( res => res.json())
            .then((data) => {
                setUserDetails(data)
            })
        } 
      },[]);



    if(userDetails){
        return (
            <>
            <Header />
            <HomeWrapper>
                <UserContainer>
                <h3>{userDetails.firstName} {userDetails.lastName}</h3>
                <p>User ID: {userDetails.id}</p>
                <p>Email: {userDetails.email}</p>
                </UserContainer>
                <div>
                   <Rules />
                </div>
            </HomeWrapper>
            </>
        )
    }else {

        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}
