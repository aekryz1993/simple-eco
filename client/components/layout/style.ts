import styled from "styled-components";
import { LayoutProps } from ".";

export const PageContainer = styled.div.attrs({
  className: "flex flex-wrap pb-16",
})<Pick<LayoutProps, "fullWidth" | "grid">>`
  justify-content: ${(props) => (props.grid ? "flex-start" : "top")};
  flex-direction: ${(props) => (props.grid ? "row" : "column")};
  /* max-width: ${(props) => (props.fullWidth ? null : "90%")}; */
  padding: ${(props) => (props.fullWidth ? 0 : "2rem")};
  column-gap: ${(props) => (props.grid ? "1rem" : null)};
  row-gap: ${(props) => (props.grid ? "3rem" : null)};
  align-content: ${(props) => (props.grid ? "center" : null)};
`;
