import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
background-color: white;
width: 400px;
border: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: 50%;
left: 50%;
`

const ModalCloseBtn = styled.button`
width: 25px;
display:flex
justify-content: flex-start;
margin: 0px 0px 5px 375px
`

const ModalInputsContainer = styled.div`
display: flex
flex-direction: column;
justify-content:center;`

const StyledInput = styled.input`
`

const StyledTextArea = styled.textarea`

`


export default function modal(props) {
  return (
    <ModalContainer>
      <ModalCloseBtn onClick={props.toggle}>x</ModalCloseBtn>
      <form onSubmit={props.submit}>
      <ModalInputsContainer>
        <div>
        <StyledInput 
          placeholder="Title"
          name={props.title} 
          value={props.value.title}
          onChange={props.handleChange}/>
        </div>
        <div>
        <StyledTextArea 
          placeholder="Reply"
          rows="8" 
          cols="25"
          name={props.content}
          value={props.value.content}
          onChange={props.handleChange}/>
        </div>
      </ModalInputsContainer>    
      <div>
        <button type={props.type}>{props.text}</button>
      </div>
      </form>
    </ModalContainer>
  )
}
