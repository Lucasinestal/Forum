import React from 'react'
import styled from 'styled-components'


export const TextArea = styled.textarea`
border: none;
border: 1px solid #FF652F;
border-bottom: 4px solid #FF652F;
margin: 50px 10px 20px;
border-radius: 4px;
padding: 10px;
background-color: #272727;
box-shadow: 0 8px 6px -6px black;
color:white;
width: 90%;
padding: 10px;

`


export default function InputArea(props) {
    return (
        <div>
             <>
       <TextArea
       rows={props.rows}
       cols={props.cols}
       type={props.text} 
       name={props.name} 
       placeholder={props.placeholder}
       onChange={props.onChange}
       ></TextArea>
       </>
        </div>
    )
}
