import React from 'react'
import styled from 'styled-components'

const ErrorMsg = styled.div`
border: 1px solid #FFE401;
background-color: #272727;
padding: 20px;
border-radius: 15px;
color: #FFE401;
width: 80%;
text-align: center;
margin: 10px 20px;
font-family: quicksand-light;
`

export default function ErrorMessage(props) {
    return (
        <ErrorMsg>
            <p>{props.value}</p>
        </ErrorMsg>
    )
}
