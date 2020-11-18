import React from 'react'

export default function InputFields(props) {
    return (
       <>
       <input 
       type={props.text} 
       name={props.name} 
       placeholder={props.placeholder}
       onChange={props.onChange}
       ></input>
       </>
    )
}
