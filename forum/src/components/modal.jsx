import React from 'react'
import styled from 'styled-components'
import TextArea from './InputArea'
import { LoginContainer, Wrapper } from './../pages/Login'
import InputFields from './../components/InputFields'
import BtnRegister from './../components/btnRegister'

const ModalContainer = styled(LoginContainer)`
  border: 1px solid black;
  height: 60vh;
  background: #272727;
  margin-top: -6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border-radius: 15px;
  @media (max-width: 425px) {
    min-width: 95%;
    min-height: 75%;
  }

`

const ModalCloseBtn = styled.button`
  width: 25px;
  display:flex;
  justify-content: flex-start;
  position: sticky;
  bottom: 100%;
  left: 100%;
  background-color: #272727;
  border:none;
  border-radius: 15px;
  font-size: 25px;
  color: white;
  margin: 0;
  `

const ModalInputsContainer = styled.div`
  display: flex
  flex-direction: column;
  justify-content:center;
  @media (max-width: 425px) {
    min-width: 320px;
    margin: 5px;
  }`

const StyledTextArea = styled(TextArea)`
width: 100%;

`

const ModalWrapper = styled(Wrapper)`
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  @media (max-width: 425px) {
    min-width: 320px;
    margin: auto;
  }
`


export default function modal(props) {
  return (
    <ModalWrapper>
    <ModalContainer>
      <ModalCloseBtn onClick={props.toggle}>x</ModalCloseBtn>
      <h2>Create Reply</h2>
      <form onSubmit={props.submit}>
      <ModalInputsContainer>
        <div>
        <InputFields 
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
        <BtnRegister type={props.type} text={props.text}></BtnRegister>
      </div>
      </form>
    </ModalContainer>
    </ModalWrapper>
  )
}
