import './UserCard.css';
import React from "react";

type PropsType = {
    fullName: string;
    onLogout?: () => void;
    onViewHistory?: () => void;
    onViewFavorites?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserCard = (
    {
        fullName,
        onLogout = () => {},
        onViewHistory = () => {},
        onViewFavorites = () => {},
        ...attributes
    }: PropsType) => {
    return (
        <div className="user-card" {...attributes}>
            <p>{fullName}</p>
            <a onClick={onViewFavorites}>Favorites</a>
            <a onClick={onViewHistory}>View history</a>
            <a href="/user/purchases">Purchases</a>
            <a onClick={onLogout}>Log out</a>
        </div>
    );
};
