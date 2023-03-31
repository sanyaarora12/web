import styled from "@emotion/styled";

const sizeMapping = {
  sm: "40px",
  md: "48px",
  lg: "56px",
  xl: "160px",
};

const fontMapping = {
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "30px",
};

export const AvatarInitialStyle = styled("div")`
  color: ${(props) => (props.color ? props.color : "white")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "green"};
  font-size: ${(props) => fontMapping[props.size]};
  height: ${(props) => sizeMapping[props.size]};
  width: ${(props) => sizeMapping[props.size]};
  border-radius: 50%;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarSubContainer = styled("div")`
  background-color: grey;
  height: ${(props) => sizeMapping[props.size]};
  width: ${(props) => sizeMapping[props.size]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
