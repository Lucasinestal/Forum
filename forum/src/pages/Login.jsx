import React,{useState} from 'react'
import InputFields from './../components/InputFields'
import { authenticateUser } from './../apiCalls'
import BtnRegister from './../components/btnRegister'
import styled from 'styled-components'
import ErrorMsg from './../components/ErrorMessage'


export const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    @media (min-width: 550px) {
        max-width: 550px;
        padding: 30px;
        border-radius: 10px;
      }
`
export const LoginForm = styled.form`
display:flex;
flex-direction: column;
width: 100%;

`

export const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;`





export default function Login(props) {


    const [errorMsg, setErrorMsg] = useState("")
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
                        setErrorMsg('Unable to log in with provided credentials!')
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
        <Wrapper>
        <LoginContainer>
            <h1>Login</h1>
            <LoginForm onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <InputFields 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <InputFields 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}/>
                </div>
                <BtnRegister
                text="login" 
                type="submit"/>

                   {errorMsg && (( 
                  
                    <ErrorMsg className="errorMessage" value={errorMsg}>
                    {errorMsg}{''}
                    </ErrorMsg>
                   
                   ))}
            </LoginForm>
        </LoginContainer>
        </Wrapper>
    )
}
