import React from 'react'
import  './Button.css'

const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" >{props.text}</button>
    );
}

export default Button;