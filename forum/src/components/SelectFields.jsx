import React from 'react'

export default function SelectFields(props) {


    return (
       <>
       <select onChange={props.onChange} type={props.type} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>{props.defaultValue}</option>
            {props.values && props.values.map((values, index) => {
            return <option key={index} value={values.id}>{values.title}</option> 
            })}
        </select>
       </>
    )
}
