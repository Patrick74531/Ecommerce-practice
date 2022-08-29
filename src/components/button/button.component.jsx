import React from 'react'
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

// const getButton = () => ({
//     [BUTTON_TYPE_CLASSES.base]: 'BaseButton',
//     [BUTTON_TYPE_CLASSES.google]: 'GoogleButton',
//     [BUTTON_TYPE_CLASSES.inverted]: 'InvertedButton',
// }[buttonType]);

// const buttonType = BUTTON_TYPE_CLASSES.base;
// console.log(getButton(buttonType));

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            {...otherProps}
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        >
            {children}
        </button>
    )
}

export default Button