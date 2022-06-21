import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "flex flex-col md:flex-row gap-2 md:gap-0 h-[30rem]",
})``;

export const ImagesNavigator = styled.div.attrs({
  className: "order-2 md:order-1",
})`
  flex-basis: 15%;
`;

export const MainImage = styled.div.attrs({
  className: "order-1 md:order-2",
})`
  flex-basis: 85%;
`;
