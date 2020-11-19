
import React,{useState, useEffect} from 'react'
import InputFields from './../components/InputFields'
import BtnRegister from './../components/btnRegister'
import SelectFields from './../components/SelectFields'
import { registerUser, fetchvalues, fetchCountries } from './../apiCalls'


export default function Register(props) {
   
    const [country, setCountry] = useState({})
    const [values, setvalues] = useState([])

    const [state, setState] = useState({
        email: {},
        password: "",
        confirmedPassword: "",
        firstName: "",
        lastName: ""
    })

    function handleChange(event) {
        const value = event.target.value
        setState({
            ...state,
        [event.target.name]: value
        });
        
      }


    function handleSubmit(event){
        event.preventDefault();
        const payload = {
            ...state,
            country
        };    
            try{
                registerUser(payload)
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
                        props.history.push("/login")
                    });
                });
            } catch(err){
                console.log("error:" + err)
            }
    }


    useEffect(() => {
        fetchCountries()
        .then( res => res.json())
        .then((data) => {
            setvalues(data.results)
        })
      },[]);

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <InputFields
                    type="email"
                    name="email"
                    value={state.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required 
                />
                <InputFields
                    type="password"
                    name="password"
                    value={state.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required 
                />
                <InputFields
                    type="password"
                    name="confirmedPassword"
                    value={state.confirmedPassword}
                    placeholder="Confirm Password" 
                    onChange={handleChange}
                    required
                />
                <InputFields 
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                />
                <InputFields
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    required 
                />
                <SelectFields
                    type="select-one"
                    name="country"
                    defaultValue="Select Country"
                    values={values}
                    value={state.country}
                    onChange={(event) => setCountry(event.target.value)}
                />
                <BtnRegister 
                    type="submit"
                    text="Register"
                />
             </form>
        </div>
    )
}

