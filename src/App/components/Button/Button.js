import React from 'react'
import  './Button.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" 
        type={props.type} 
        style={ {backgroundColor:props.bgColor,...props.style} }
        >{props.children}</button>
    );
};

Button.propTypes={
    children:PropTypes.any.isRequired,
    bgColor:PropTypes.string,
    style:PropTypes.object,
}
Button.defaultProps={
    children:'default button value',
    bgColor:'orange'
}

export default Button;
