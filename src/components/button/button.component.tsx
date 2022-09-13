import { ButtonHTMLAttributes, FC } from 'react'
import { SpinnerContainer } from '../spinner/spinner.styles';
import './button.styles.scss'

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