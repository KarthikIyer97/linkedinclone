import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice'
import { auth } from './firebase';


function Header() {
    

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
 
            

            <div className="header__left">

                <img
                 src="https://image.flaticon.com/icons/png/512/174/174857.png" 
                 alt="" 

                 />

            </div>

            <div className="header__search">

                {/* SearchIcon */}
                <SearchIcon />

                <input placeholder="Search" type="text" />
            </div>

            <div className="header__right">

                  <HeaderOptions Icon={HomeIcon} title="Home" />
                  <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />  
                  <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                  <HeaderOptions Icon={ChatIcon} title="Messaging" />
                  <HeaderOptions Icon={NotificationImportantIcon} title="Notifications" />
                  <HeaderOptions 
                    avatar={true}
                    title="me"
                    onClick={logoutOfApp}  
                  />
                  

            </div>


        </div>
    )
    
}

export default Header;