import styled from "styled-components";
import { device } from "styles";

export const TitleHead = styled.div.attrs({
  className: "w-96",
})<{ ml: number }>`
  margin-left: ${(props) => `${props.ml}%`};
`;
export const TitleHeadText = styled.h3.attrs({
  className: "py-2",
})`
  font-size: calc(1.2rem + 0.6vw);
`;

export const ImageContainer = styled.div.attrs({
  className: "w-full relative",
})`
  height: calc(50vw - 1rem);
  @media ${device.tablet} {
    height: 30vw;
  }
  @media ${device.laptop} {
    height: calc(25vw - 1rem);
  }
  @media ${device.laptopL} {
    height: calc(20vw - 1rem);
  }
`;
