import React from "react";
import {Button} from "./Button.tsx";
import './Button.css';
import {LikeIcon} from "../icon/LikeIcon.tsx";

type PropsType = {
    isActive: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LikeButton = ({ isActive, ...attributes}: PropsType) => (
    <Button className={`button like-button ${isActive ? 'active-like-button' : 'inactive-like-button'}`} {...attributes}>
        <LikeIcon />
    </Button>
);
