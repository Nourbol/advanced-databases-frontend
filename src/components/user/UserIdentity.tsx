import userIcon from "../../assets/user-icon.avif";
import {Button} from "../button";
import {UserCard} from "./UserCard.tsx";
import {useProfile} from "../../context/profileContext.ts";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick.ts";
import {useLocation, useNavigate} from "react-router-dom";

export const UserIdentity = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const ref = useRef<HTMLDivElement>(null);

    const {profile, onLogout} = useProfile();

    const [isUserCardOpen, setIsUserCardOpen] = useState(false);

    useOutsideClick(ref, () => setIsUserCardOpen(false));

    const handleUserLogoClick = () => setIsUserCardOpen(prevState => !prevState);

    const handleLogout = () => {
        setIsUserCardOpen(false);
        onLogout?.();
    }

    if (profile && profile.authenticated) {
        return (
            <>
                <img src={userIcon} alt={profile.fullName} onClick={handleUserLogoClick} className="header-user-logo"/>
                {isUserCardOpen && (
                    <div className="user-card-wrapper" ref={ref}>
                        <UserCard fullName={profile.fullName!} onLogout={handleLogout}/>
                    </div>
                )}
            </>
        );
    }

    const handleLoginButtonClick = () => navigate('/login');
    const handleRegisterButtonClick = () => navigate('/register');

    return (
        pathname === '/login'
            ? <Button onClick={handleRegisterButtonClick} className="text-button login-button">Register</Button>
            : <Button onClick={handleLoginButtonClick} className="text-button login-button">Login</Button>
    );
}