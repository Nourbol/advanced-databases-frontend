import {BurgerButton} from '../button';
import logo from '../../assets/logo.png'
import './Header.css'

export const Header = () => (
    <div className="header">
        <div className="header-left-container">
            <BurgerButton/>
            <img src={logo} alt="logo" className="logo"/>
        </div>
    </div>
);
