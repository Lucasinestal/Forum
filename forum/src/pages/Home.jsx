import React,{useEffect, useState} from 'react'
import { fetchMe, fetchCountries } from './../apiCalls'
import Rules from './../Rules'
import styled from 'styled-components'

const HomeWrapper = styled.div`
    display:flex;
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
            <HomeWrapper>
                <div>
                <h4>{userData.firstName} {userData.lastName}</h4>
                <p>User ID: {userData.id}</p>
                <p>Email: {userData.email}</p>
                </div>
                <div>
                   <Rules />
                </div>
            </HomeWrapper>
            
        )
    }else {

        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}
