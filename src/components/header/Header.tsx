import {MenuButton} from '../button';
import {useNavigate, useSearchParams} from "react-router-dom";
import {SearchBar} from "../search/SearchBar.tsx";
import {SEARCH_QUERY} from "../../constants/queryParams.ts";
import logo from '../../assets/logo.png'
import {UserIdentity} from "../user/UserIdentity.tsx";
import './Header.css'

type PropsType = {
    onMenuButtonClick?: () => void;
};

export const Header = ({onMenuButtonClick = () => {}}: PropsType) => {
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const handleSearch = (search: string) => {
        navigate(`/search?${SEARCH_QUERY}=${search}`);
    }

    const searchQuery = params.get(SEARCH_QUERY) || undefined;

    return (
        <header className="header">
            <div className="header-left-container">
                <MenuButton onClick={onMenuButtonClick} />
                <a href="/">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
            </div>
            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
            <UserIdentity/>
        </header>
    );
};
