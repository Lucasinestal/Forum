import React,{useState} from 'react'
import InputFields from './../components/InputFields'
import { authenticateUser } from './../apiCalls'
import BtnRegister from './../components/btnRegister'

export default function Login(props) {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        })
        console.log(state)
    }

    function handleSubmit(event){
        event.preventDefault();

        try{
            authenticateUser(state)
            .then((res) => {
                if(res.status === 400){
                    res.json().then((data) => {
                        event.target.reset();
                        console.log(data)
                        
                    });
                    return;
                }
                res.json().then((data) => {
                    const {token} = data;
                    localStorage.setItem("token", token)
                    props.history.push("/home")
                    console.log(data)
                    
                });
            });
        } catch(err){
            console.log("error:" + err)
        }

    }

   


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <InputFields 
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}/>
                <InputFields 
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}/>
                <BtnRegister
                text="login" 
                type="submit"/>
            </form>
        </div>
    )
}
