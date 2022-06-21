// import { forwardRef } from "react";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Dir } from "./types";

// const Helper = forwardRef(
//   (
//     props: { children: React.ReactNode; className: string },
//     ref?: React.Ref<HTMLDivElement>
//   ) => (
//     <div className={props.className} ref={ref}>
//       {props.children}
//     </div>
//   )
// );

// Helper.displayName = "Helper";

// export const SliderContainer = styled(Helper).attrs({
//   className: "flex ",
// })``;

const SlideButtonHelper = (props: {
  position: "left" | "right";
  className: string;
  onClick: () => void;
}) => {
  return props.position === "left" ? (
    <ArrowLeftIcon
      className={`${props.className} left-[1rem]`}
      onClick={props.onClick}
    />
  ) : (
    <ArrowRightIcon
      className={`${props.className} right-[1rem]`}
      onClick={props.onClick}
    />
  );
};

export const SlideButton = styled(SlideButtonHelper).attrs({
  className: "absolute cursor-pointer w-8 h-8 z-10",
})`
  color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: 1px 1px 10px 1px ${(props) => props.theme.colors.primary};
  top: 50%;
  padding: 0.3rem;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Main = styled.main.attrs<{
  slider?: string | undefined;
  sliding: string | undefined;
}>((props) => ({
  className: `flex nowrap w-full ${!props.slider ? "h-full" : ""}`,
}))<{
  slider?: string | undefined;
  sliding: string | undefined;
  dir: Dir;
}>`
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
    if (props.slider && !props.sliding) return "translateX(calc(-100%))";
    if (props.slider && props.dir === Dir.PREV)
      return "translateX(calc(2 * (-100%)))";
    if (props.slider) return "translateX(0%)";
  }};
`;

export const CarouselSlot = styled.div.attrs<{ slider?: string | undefined }>(
  (props) => ({
    className: `${
      !props.slider ? "transition-opacity duration-1000" : "relative"
    }`,
  })
)<{
  pos: number;
  index: number;
  order?: number;
  slider?: string | undefined;
}>`
  flex: 0 0 100%;
  transform: ${(props) => !props.slider && `translateX(${-100 * props.pos}%)`};
  opacity: ${(props) => !props.slider && (props.index === props.pos ? 1 : 0.5)};
  order: ${(props) => props.slider && props.order};
`;
