import Link from "next/link";
import styled from "styled-components";
import { device } from "styles";

export const CardContainer = styled.article.attrs({
  className: "bg-white cursor-pointer hover:opacity-80 h-auto",
})`
  width: calc(40% - 1rem);
  @media ${device.tablet} {
    width: calc(30% - 1rem);
  }
  @media ${device.laptop} {
    width: calc(25% - 1rem);
  }
  @media ${device.laptopL} {
    width: calc(25% - 1rem);
  }
`;

export const LinkCard = styled(Link)``;

export const ImageContainer = styled.div.attrs({
  className: "w-full relative",
})`
  min-height: calc(45vw - 1rem);
  @media ${device.tablet} {
    min-height: 35vw;
  }
  @media ${device.laptop} {
    min-height: calc(30vw - 1rem);
  }
  @media ${device.laptopL} {
    min-height: calc(25vw - 1rem);
  }
`;

export const TextContainer = styled.div.attrs({
  className: "py-4",
})`
  height: 10%;
`;

export const ProductName = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: calc(0.8rem + 0.6vw);
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: calc(0.5rem + 0.6vw);
`;
