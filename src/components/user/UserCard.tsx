import './UserCard.css';
import React from "react";

type PropsType = {
    fullName: string;
    onLogout?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserCard = ({ fullName, onLogout = () => {}, ...attributes }: PropsType) => {
    return (
        <div className="user-card" {...attributes}>
            <p>{fullName}</p>
            <a href="/user/likes">Liked products</a>
            <a href="/user/views">Viewed products</a>
            <a href="/user/purchases">Purchases</a>
            <a onClick={onLogout}>Log out</a>
        </div>
    );
};
