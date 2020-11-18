import React from 'react'
import InputFields from './../components/InputFields'
import { authenticateUser } from './../apiCalls'

export default function Login() {

    authenticateUser();


    return (
        <div>
            <h1>Login</h1>
            <InputFields />
            <InputFields />
        </div>
    )
}
