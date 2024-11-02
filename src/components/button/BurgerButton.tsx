import burgerButtonIcon from '../../assets/burger-button-icon.svg'
import './Button.css'

type PropsType = {
    onClick?: () => void;
};

export const BurgerButton = ({onClick = () => {}}: PropsType) => (
        <button className="burger-button" onClick={onClick}>
            <img src={burgerButtonIcon} alt="burger icon"/>
        </button>
);
