import React,{useState, useContext} from 'react'
import InputFields from './../components/InputFields'
import { authenticateUser } from './../apiCalls'
import BtnRegister from './../components/btnRegister'
import styled from 'styled-components'
import ErrorMsg from './../components/ErrorMessage'
import { Link } from 'react-router-dom' 
import HeaderLogin from './../components/headerLogin'
import { UserContext } from '../UserContext'


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
      @media (max-width: 425px) {
        min-width: 95%;
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


const RegisterP = styled.p`
padding: 10px 20px;
`


export default function Login(props) {

    const {setUserDetails} = useContext(UserContext);
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
    }

    function handleSubmit(event){
        event.preventDefault();

        try{
            authenticateUser(state)
            .then((res) => {
                if(res.status === 400){
                    res.json().then((data) => {
                        event.target.reset();
                        setErrorMsg('Unable to log in with provided credentials!')
                    });
                    return;
                }
                res.json().then((data) => {
                    const {token} = data;
                    localStorage.setItem("token", token)
                    setUserDetails(null)
                    props.history.push("/home")
                    
                });
            });
        } catch(err){
            console.log("error:" + err)
        }

    }


    return (
        <>
        <HeaderLogin />
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
                <RegisterP>Don't have an account? <Link to="/register">Create one!</Link> </RegisterP>
                   {errorMsg && (( 
                  
                    <ErrorMsg className="errorMessage" value={errorMsg}>
                    {errorMsg}{''}
                    </ErrorMsg>
                   
                   ))}
            </LoginForm>
        </LoginContainer>
        </Wrapper>
        </>
    )
}
