import React,{useState} from 'react'
import LoginForm from './../components/FormLogin'



const root_url = "https://lab.willandskill.eu"
const auth_url = `${root_url}/api/v1/auth/api-token-auth/`

export default function Login() {
    const [authData, setAuthData] = useState(null)
    const payload = {
        email: "pelle@willandskill.se",
        password: "pellesvanslos"
    }
    function authenticateUser(){
        fetch(auth_url,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            const {token} = data;
            localStorage.setItem("token", token)
        })
        
    }
    authenticateUser();
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}
