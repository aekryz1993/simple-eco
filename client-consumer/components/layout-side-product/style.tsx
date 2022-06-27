import styled from "styled-components";

export const Title = styled.h1`
  font-size: calc(1rem + 0.5vw);
  line-height: 1.2em;
  letter-spacing: 0.2em;
`;

export const Price = styled.h1`
  font-size: calc(0.9rem + 0.6vw);
  font-weight: 900;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const Description = styled.p`
  text-align: "justify";
  letter-spacing: 0.1em;
  font-size: calc(0.75rem + 0.35vw);
`;

export const OrderButton = styled.div.attrs({
  className:
    "flex justify-center items-center bg-secondaryHover hover:bg-primary shadow shadow-textSecondary",
})`
  width: 60%;
  border-radius: 0.3rem;
`;

export const TextButton = styled.span.attrs({
  className: "text-secondary",
})`
  font-weight: 500;
  font-size: calc(0.75rem + 0.35vw);
  cursor: pointer;
`;
