//import avatarPlaceholder from 'assets/img/avatar-placeholder.webp';
import { useStore } from 'effector-react';
import React from 'react';
import { userStores } from 'stores/user';
//import classes from './Header.module.scss';

//{ currentUser, currentUserName, isAdmin, logout }
export const Header = () => {
    const { access } = useStore(userStores.auth);
    return (
        // if (!currentUser) {
        //     return null;
        // }

        // <div className={`${classes.header} d-flex align-items-center justify-content-between px-4`}>
        <div className={`d-flex align-items-center justify-content-between px-4`}>
            <span>{access === 0 ? 'WOM Admin' : 'Campaign manager'}</span>

            <div className="d-flex">
                <div className="text-right mr-2">
                    <span className="d-block">{`some name`}</span>

                    {/* <button type="button" className={classes.logoutBtn} onClick={logout}> */}
                    <button type="button" onClick={() => {}}>
                        Logout
                    </button>
                </div>

                {/* <div className={classes.userAvatar}> */}
                <div>
                    <img alt="User avatar" className="w-100 h-100 object-fit-cover" src={`src`} />
                </div>
            </div>
        </div>
    );
};
