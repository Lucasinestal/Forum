import React,{useState, useEffect} from 'react'
import InputFields from './../components/InputFields'
import InputArea from './../components/InputArea'
import SelectFields from './../components/SelectFields'
import {fetchCategories} from './../apiCalls'
import BtnRegister from './../components/btnRegister'
import {createPost} from './../apiCalls'




export default function PostCreate(props) {
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
            console.log(state)
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
                            console.log(data)
                            
                        });
                        return;
                    }
                    res.json().then((data) => {
                        console.log(data)
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
        <div>
            <h1>Post Create Page</h1>
            <form onSubmit={handleSubmit}>
                <InputFields 
                    onChange={handleChange}
                    name="title"
                    type="text"
                    value={state.title}
                    placeholder="title"/>
                <InputArea 
                    onChange={handleChange}
                    name="content"
                    type="text"
                    value={state.content}
                    rows="8"
                    cols="50"
                    placeholder="Post content.."/>
                <SelectFields 
                    defaultValue="Select Category"
                    type="select-one"
                    name="category"
                    values={values}
                    value={state.category}
                    onChange={(event) => setCategory(event.target.value)}/>
                <BtnRegister
                    text="Publish" 
                    type="submit"
                />
            </form>
        </div>
    )
}
