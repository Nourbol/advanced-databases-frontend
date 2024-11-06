import './UserCard.css';
import {Button} from "../button";
import React from "react";

type PropsType = {
    fullName: string;
    email: string;
    onLogout?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserCard = ({ fullName, email, onLogout = () => {}, ...attributes }: PropsType) => {
    return (
        <div className="user-card" {...attributes}>
            <p>Full name: {fullName}</p>
            <p>Email: {email}</p>
            <Button onClick={onLogout}>Log out</Button>
        </div>
    );
};
