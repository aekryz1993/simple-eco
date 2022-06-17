import styled from "styled-components";

export const CardContainer = styled.div.attrs({
  className: "bg-white cursor-pointer hover:opacity-80 h-[30rem] w-60",
})`
  box-shadow: "0px 1px 5px 0px rgba(0,0,0,0.15)";
`;

export const ImageContainer = styled.div.attrs({
  className: "h-[75%] relative",
})``;

export const Title = styled.div.attrs({
  className: "mt-4",
})`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
`;

export const Price = styled.div.attrs({
  className: "",
})`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.8rem;
`;
