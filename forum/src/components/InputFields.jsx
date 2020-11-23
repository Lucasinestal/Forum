import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
    border: none;
    border-bottom: 4px solid #FF652F;
    margin:15px 10px;
    border-radius: 4px;
    padding: 10px;
    background-color: #272727;
    box-shadow: 0 8px 6px -6px black;
    color:white;
    width: 90%;
`



export default function InputFields(props) {
    return (
       <>
       <Input
       type={props.type} 
       name={props.name} 
       placeholder={props.placeholder}
       placeholderTextColor="black"
       onChange={props.onChange}
       ></Input>
       </>
    )
}
