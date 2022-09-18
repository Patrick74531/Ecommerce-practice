import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Dropdown from "../dropdown/dropdown.component"


import './user-dropdown.styles.scss'

const UserDropdown = () => {


    return (
        <Dropdown>
            <div className="user-dropdown">
                <div className="user-items-wrap">
                    <PersonIcon />
                    <Link
                        className="user-item"
                        to='user-account'
                    >
                        My Account
                    </Link>
                </div>
                <div className="user-items-wrap">
                    <ListAltIcon />
                    <Link
                        className="user-item"
                        to='user-orders'
                    >
                        My Orders
                    </Link>

                </div>
                <div className="user-items-wrap">
                    <AssignmentReturnIcon />
                    <span className="user-item">My Returns</span>
                </div>
                <div className="user-items-wrap">
                    <ChatBubbleOutlineIcon />
                    <span className="user-item">Contact Preferences</span>
                </div>
            </div>
        </Dropdown>
    )
}

export default UserDropdown