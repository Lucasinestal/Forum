import React,{useEffect, useState} from 'react'
import { fetchMe, fetchCountries } from './../apiCalls'

export default function Home() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetchMe()
        .then( res => res.json())
        .then((data) => {
            setUserData(data)
        })
      },[]);



    if(userData){
        return (
            <div>
                <h4>{userData.firstName} {userData.lastName}</h4>
                <p>User ID: {userData.id}</p>
                <p>Email: {userData.email}</p>
            </div>
        )
    }else {

        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}
