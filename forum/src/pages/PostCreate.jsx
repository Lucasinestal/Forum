import React,{useState, useEffect} from 'react'
import InputFields from './../components/InputFields'
import InputArea from './../components/InputArea'
import SelectFields from './../components/SelectFields'
import {fetchCategories} from './../apiCalls'
import BtnRegister from './../components/btnRegister'
import {createPost} from './../apiCalls'
import Header from './../components/header'
import { LoginContainer, Wrapper } from './Login'
import styled from 'styled-components'

const CreateWrapper = styled(Wrapper)``

const CreateContainer = styled(LoginContainer)``

export default function PostCreate(props) {
    const [errorMsg, setErrorMsg] = useState("")
    const [values, setValues] = useState([])
    const [category, setCategory] = useState([])
    const [state, setState] = useState({
        title:"",
        content:"",
        category:"",

    })

    function handleChange(event){
        const value = event.target.value
            setState({
                ...state,
                [event.target.name]: value
            })
    }

    function handleSubmit(event){
        event.preventDefault();
            const payload = {
                ...state,
                category
            };
            try{
                createPost(payload)
                .then((res) => {
                    if(res.status === 400){
                        res.json().then((data) => {
                            event.target.reset();
                            setErrorMsg("Unable to create post with provided information")
                            
                        });
                        return;
                    }
                    res.json().then((data) => {
                        props.history.push("/posts")
                    });
                });
            } catch(err){
                console.log("error:" + err)
            }
            
    }

    useEffect(() => {
        fetchCategories()
        .then( res => res.json())
        .then((data) => {
            setValues(data.results)
        })
      },[]);

    return (
        <>
        <Header />
        <CreateWrapper>
        <CreateContainer>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <InputFields 
                    onChange={handleChange}
                    name="title"
                    type="text"
                    value={state.title}
                    placeholder="Title"/>
                    <SelectFields 
                    defaultValue="Select Category"
                    type="select-one"
                    name="category"
                    values={values}
                    value={state.category}
                    onChange={(event) => setCategory(event.target.value)}/>
                <InputArea 
                    onChange={handleChange}
                    name="content"
                    type="text"
                    value={state.content}
                    rows="8"
                    cols="50"
                    placeholder="Post content.."/>
                <BtnRegister
                    text="Publish" 
                    type="submit"
                />
                   {errorMsg && (( 
                  
                  <div >
                  {errorMsg}{''}
                  </div>
                 
                 ))}
            </form>
        </CreateContainer>
        </CreateWrapper>
        </>
    )
}
