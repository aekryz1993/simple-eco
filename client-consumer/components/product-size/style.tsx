import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "flex flex-wrap justify-start items-center gap-6",
})``;

export const SizeItem = styled.div.attrs<{ chosen: string | undefined }>(
  (props) => ({
    className: `flex justify-center items-center w-10 h-10 shadow shadow-transparent ${
      props.chosen ? "shadow-textSecondary" : "shadow-primary"
    }`,
  })
)<{ chosen: string | undefined }>`
  background-color: ${(props) =>
    props.chosen ? props.theme.colors.primary : "inherit"};
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      !props.chosen
        ? props.theme.colors.primaryHover
        : props.theme.colors.secondaryHover};
  }
`;

export const Text = styled.span<{ chosen: string | undefined }>`
  font-size: calc(0.75rem + 0.4vw);
  font-weight: 500;
  color: ${(props) =>
    props.chosen
      ? props.theme.colors.secondary
      : props.theme.colors.textSecondary};
`;
