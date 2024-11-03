import {MenuButton} from '../button';
import logo from '../../assets/logo.png'
import './Header.css'

export const Header = () => (
    <div className="header">
        <div className="header-left-container">
            <MenuButton/>
            <img src={logo} alt="logo" className="logo"/>
        </div>
    </div>
);
