import React from 'react'
import  './Button.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button className={props.classColor?'Button '+props.classColor:'Button'} type={props.type} >{props.children}</button>
    );
};

Button.propTypes={
    children:PropTypes.any.isRequired,
    classColor:PropTypes.string,
}
Button.defaultProps={
    children:'default button value'
}

export default Button;
