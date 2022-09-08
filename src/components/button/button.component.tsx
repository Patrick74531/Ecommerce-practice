import { ButtonHTMLAttributes, FC } from 'react'
import { SpinnerContainer } from '../spinner/spinner.styles';
import './button.styles.scss'

// type BUTTON_TYPE_CLASSES = {
//     base:string;
//     google:string;
//     inverted:string;
// }
// export const BUTTON_TYPE_CLASSES = {
//     base: 'base',
//     google: 'google-sign-in',
//     inverted: 'inverted',
// };

// export enum BUTTON_TYPE_CLASSES {
//     base = 'base',
//     google = 'google-sign-in',
//     inverted = 'inverted',
// };

// const getButton = () => ({
//     [BUTTON_TYPE_CLASSES.base]: 'BaseButton',
//     [BUTTON_TYPE_CLASSES.google]: 'GoogleButton',
//     [BUTTON_TYPE_CLASSES.inverted]: 'InvertedButton',
// }[buttonType]);

// const buttonType = BUTTON_TYPE_CLASSES.base;
// console.log(getButton(buttonType));
export type ButtonType = {
    buttonType?: string;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonType> = ({
    children,
    buttonType,
    isLoading,
    ...otherProps
}) => {


    return (
        <button
            {...otherProps}
            className={`button-container ${buttonType}`}
            disabled={isLoading}
        >
            {isLoading ? <SpinnerContainer /> : children}
        </button>
    )
}

export default Button