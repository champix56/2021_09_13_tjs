import React from 'react'
import  './Button.css'

const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" >{props.children}</button>
    );
}

export default Button;