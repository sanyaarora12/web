import React from "react";
import { AvatarInitialStyle, AvatarSubContainer } from "./style";
import "./style.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Avatar({
  src,
  name,
  color,
  backgroundColor,
  size,
  hoverable,
}) {
  const customisedAvatar = () => {
    if (src) {
      return (
        <AvatarSubContainer hoverable={hoverable} size={size}>
          <img className="avatar__image__container" src={src} alt="" />
        </AvatarSubContainer>
      );
    }
    if (name) {
      const parts = name.split(" ");
      const nameLessThanOne = parts[0][1]
        ? parts[0][0] + parts[0][1]
        : parts[0][0];

      const initials =
        parts.length > 1
          ? parts[0][0] + parts[parts.length - 1][0]
          : nameLessThanOne;

      if (initials.length > 1) {
        return (
          <AvatarInitialStyle
            hoverable={hoverable}
            size={size}
            color={color}
            backgroundColor={backgroundColor}
          >
            <div>{initials.toUpperCase()}</div>
          </AvatarInitialStyle>
        );
      }
      return (
        <AvatarInitialStyle
          hoverable={hoverable}
          size={size}
          color={color}
          backgroundColor={backgroundColor}
        >
          <div>{initials.toUpperCase()}</div>
        </AvatarInitialStyle>
      );
    }
    return (
      <AccountCircleIcon />
      //   <AvatarSubContainer hoverable={hoverable} size={size}>
      //     <AccountCircleIcon />
      //   </AvatarSubContainer>
    );
  };
  return <div className="avatar__container">{customisedAvatar()}</div>;
}
