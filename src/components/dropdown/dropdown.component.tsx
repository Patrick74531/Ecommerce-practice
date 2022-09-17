import { FC } from 'react'
import './dropdown.styles.scss'

export type DropdownType = {
    children?: React.ReactNode
}
const Dropdown: FC<DropdownType> = ({ children }) => {
    return (
        <div className='cart-dropdown-container'
            onClick={(ev) => ev.stopPropagation()}
        >
            {children}
        </div>
    )
}

export default Dropdown