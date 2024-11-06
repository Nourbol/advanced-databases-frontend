import {Button, MenuButton} from '../button';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useProfile} from "../../context/profileContext.ts";
import {UserCard} from "../user-card/UserCard.tsx";
import {useRef, useState} from "react";
import {SearchBar} from "../search/SearchBar.tsx";
import {SEARCH_QUERY} from "../../constants/queryParams.ts";
import userIcon from '../../assets/user-icon.avif'
import logo from '../../assets/logo.png'
import './Header.css'
import {useOutsideClick} from "../../hooks/useOutsideClick.ts";

export const Header = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const {profile, onLogout} = useProfile();

    const [isUserCardOpen, setIsUserCardOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => setIsUserCardOpen(false));

    const handleLoginButtonClick = () => navigate('/login');

    const handleUserLogoClick = () => setIsUserCardOpen(prevState => !prevState);

    const handleSearch = (search: string) => {
        navigate(`/search?${SEARCH_QUERY}=${search}`);
    }

    const handleLogout = () => {
        setIsUserCardOpen(false);
        onLogout?.();
    }

    const searchQuery = params.get(SEARCH_QUERY) || undefined;

    return (
        <div className="header">
            <div className="header-left-container">
                <MenuButton/>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <SearchBar onSearch={handleSearch} initialValue={searchQuery}/>
            {
                profile?.authenticated
                    ? <img src={userIcon} alt="user icon" onClick={handleUserLogoClick} className="header-user-logo"/>
                    : <Button onClick={handleLoginButtonClick} className="text-button login-button">Log in</Button>
            }
            {isUserCardOpen && (
                <div className="user-card-wrapper" ref={ref}>
                    <UserCard fullName={profile!.fullName!} email={profile!.email!} onLogout={handleLogout}/>
                </div>
            )}
        </div>
    );
};
