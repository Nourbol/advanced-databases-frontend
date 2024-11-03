import React from "react";
import {Button} from "./Button.tsx";
import {Icon} from "../icon/Icon.tsx";
import likeIcon from "../../assets/like-icon.svg";
import './Button.css';

export const LikeButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <Button className="button like-button" {...props}>
        <Icon src={likeIcon} name="like icon" />
    </Button>
);
