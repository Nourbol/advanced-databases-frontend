import './Button.css';
import React, {ReactNode} from "react";

type PropsType = {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
};

export const Button = ({children, onClick = () => {}}: PropsType) => (
    <button className="text-button" onClick={onClick}>
        {children}
    </button>
);
