import React from 'react'

export default function SelectFields(props) {


    return (
       <>
       <select onChange={props.onChange} type={props.type} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Select Country</option>
            {props.countries && props.countries.map((countries, index) => {
            return <option key={index} value={countries.id}>{countries.title}</option> 
            })}
        </select>
       </>
    )
}
