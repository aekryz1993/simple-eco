import Link from "next/link";
import styled from "styled-components";
import { device } from "styles";

export const CardContainer = styled.article.attrs({
  className: "bg-white cursor-pointer hover:opacity-80",
})`
  width: calc(40% - 1rem);
  height: calc(45vw - 1rem);
  @media ${device.tablet} {
    width: calc(30% - 1rem);
    height: 35vw;
  }
  @media ${device.laptop} {
    width: calc(25% - 1rem);
    height: calc(30vw - 1rem);
  }
  @media ${device.laptopL} {
    width: calc(25% - 1rem);
    height: calc(25vw - 1rem);
  }
`;

export const LinkCard = styled(Link)``;

export const ImageContainer = styled.div.attrs({
  className: "w-full relative",
})`
  height: 90%;
`;

export const TextContainer = styled.div.attrs({
  className: "pt-2",
})`
  height: 10%;
`;

export const Title = styled.div.attrs({
  className: "",
})`
  color: ${(props) => props.theme.colors.text};
  font-size: calc(0.5rem * 0.5vw);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div.attrs({
  className: "",
})`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.8rem;
`;
