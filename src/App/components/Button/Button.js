import React from 'react'
import  './Button.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" 
        type={props.type} 
        style={ {backgroundColor:props.bgColor,...props.style} }
        onClick={(evt)=>{
            props.onClickEvent('bla bla');
        }}
        >{props.children}</button>
    );
};

Button.propTypes={
    children:PropTypes.any.isRequired,
    bgColor:PropTypes.string,
    style:PropTypes.object,
    onClickEvent:PropTypes.func.isRequired,
}
Button.defaultProps={
    children:'default button value',
    bgColor:'orange',
    onClickEvent:()=>{}
}

export default Button;
