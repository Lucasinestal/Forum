import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
background-color: #272727;
color: #747474;
border: none;
border-bottom: 4px solid #FF652F;
border-radius: 4px;
box-shadow: 0 8px 6px -6px black;
padding: 15px 10px;

margin: 5px 10px
`
export default function SelectFields(props) {


    return (
       <>
       <Select onChange={props.onChange} type={props.type} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>{props.defaultValue}</option>
            {props.values && props.values.map((values, index) => {
            return <option key={index} value={values.id}>{values.title}</option> 
            })}
        </Select>
       </>
    )
}
