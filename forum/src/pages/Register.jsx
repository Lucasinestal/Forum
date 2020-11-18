
import React,{useState, useEffect} from 'react'
import InputFields from './../components/InputFields'
import BtnRegister from './../components/btnRegister'
import SelectFields from './../components/SelectFields'
import { registerUser, fetchCountries } from './../apiCalls'


export default function Register(props) {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState({})
    const [countries, setCountries] = useState([])


    function handleSubmit(event){
        event.preventDefault();
        const payload = {
            email,
            password,
            country,
            firstName,
            lastName,
        };    
            try{
                registerUser(payload)
                .then((res) => {
                    if(res.status === 400){
                        res.json().then((data) => {
                            props.history.push("/register")
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
            setCountries(data.results)
        })
      },[]);

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <InputFields
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={ (event) => setEmail(event.target.value)}
                    required 
                />
                <InputFields
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange= {(event) => setPassword(event.target.value)}
                    required 
                />
                <InputFields
                    type="password"
                    name="confirmedPassword"
                    value={confirmedPassword}
                    placeholder="Confirm Password" 
                    onChange= {(event) => setConfirmedPassword(event.target.value)}
                    required
                />
                <InputFields 
                    type="text"
                    name="firstname"
                    value={firstName}
                    placeholder="First Name"
                    onChange= {(event) => setFirstName(event.target.value)}
                    required
                />
                <InputFields
                    type="text"
                    name="lastname"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                    required 
                />
                <SelectFields
                    type="select-one"
                    countries={countries}
                    value={country}
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


