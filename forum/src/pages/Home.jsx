import React,{useEffect, useState} from 'react'
import { fetchMe, fetchCountries } from './../apiCalls'
import Rules from './../Rules'
import styled from 'styled-components'
import Header from './../components/header'

const HomeWrapper = styled.div`
    display:flex;
    flex-direction: column;
`

const UserContainer = styled.div`
padding: 20px;
`

export default function Home() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetchMe()
        .then( res => res.json())
        .then((data) => {
            setUserData(data)
            console.log(userData)
        })
      },[]);



    if(userData){
        return (
            <>
            <Header />
            <HomeWrapper>
                <UserContainer>
                <h3>{userData.firstName} {userData.lastName}</h3>
                <p>User ID: {userData.id}</p>
                <p>Email: {userData.email}</p>
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
