import React from 'react'
import styled from 'styled-components'

export const Button = styled.button `
padding: 8px 10rem;
 width: 95%;
 border-radius: 5px;
 border: 2px solid #272727;
 background-color:#FF652F;
 color: #272727;
 font-size: 1.5rem;
 box-shadow: 0 8px 6px -6px black;
 margin: 30px 10px;
 @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    font-size: 1.2rem;
 }
`

export default function btnRegister(props) {

    return (
        <>
        <Button onClick={props.onClick} type={props.type}>{props.text}</Button>
        </>
    )
}
