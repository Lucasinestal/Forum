import React from 'react'

export default function InputArea(props) {
    return (
        <div>
             <>
       <textarea
       rows={props.rows}
       cols={props.cols}
       type={props.text} 
       name={props.name} 
       placeholder={props.placeholder}
       onChange={props.onChange}
       ></textarea>
       </>
        </div>
    )
}
