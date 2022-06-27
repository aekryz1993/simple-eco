import { MinusIcon } from "@heroicons/react/solid";
import { forwardRef } from "react";
import styled, { css } from "styled-components";

export const Container = styled.div.attrs({
  className: "flex shadow shadow-primary",
})`
  border-radius: 0.3rem;
  width: 40%;
  height: calc(2rem + 0.8vw);
`;

const commonBtn = css`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LeftButton = styled.div`
  ${commonBtn}
  border-right: 1px solid ${(props) => props.theme.colors.primary}
`;

export const RightButton = styled.div`
  ${commonBtn}
  border-left: 1px solid ${(props) => props.theme.colors.primary}
`;

const InputHelper = forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref?: React.LegacyRef<HTMLInputElement>
  ) => <input {...props} ref={ref} />
);

export const QuantityInput = styled(InputHelper).attrs({
  className:
    "border-0 outline-0 focus:outline-2 focus:outline-primary text-textSecondary text-center text-xl font-bold",
})`
  width: 50%;
`;
