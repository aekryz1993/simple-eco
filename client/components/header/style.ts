import styled from "styled-components";

export const HeaderBar = styled.div.attrs({
  className: "flex items-center justify-center",
})`
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 2.5rem 0;
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled.div.attrs({
  className: "flex gap-8",
})`
  width: 90%;
`;

export const HomeButtonContainer = styled.div.attrs({
  className: "flex items-center justify-center flex-none",
})``;

export const HomeButton = styled.div.attrs({
  className: "flex items-center",
})`
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.secondaryHover};
  }
  cursor: pointer;
  gap: 0.5rem;
`;

export const LogoContainer = styled.div.attrs({
  className: "flex self-center",
})``;

export const Title = styled.div.attrs({
  className: "flex flex-col",
})`
  h3 {
    font-size: calc(1rem + 1vw);
    font-weight: 500;
    line-height: 1em;
    margin-bottom: 0;
  }
  div {
    font-size: calc(0.5rem * 1vw);
  }
`;
