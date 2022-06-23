// import { forwardRef } from "react";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Dir } from "./types";
import { lastMove } from "./helper";

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
  xMargin?: number;
  className: string;
  onClick: () => void;
}) => {
  return props.position === "left" ? (
    <ArrowLeftIcon className={`${props.className}`} onClick={props.onClick} />
  ) : (
    <ArrowRightIcon className={`${props.className}`} onClick={props.onClick} />
  );
};

export const SlideButton = styled(SlideButtonHelper).attrs({
  className: "absolute cursor-pointer w-8 h-8 z-10",
})<{ position: "left" | "right" }>`
  color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: 1px 1px 10px 1px ${(props) => props.theme.colors.primary};
  top: 50%;
  padding: 0.3rem;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  left: ${(props) =>
    props.position === "left" && `${props.xMargin ? props.xMargin + 1 : 1}rem`};
  right: ${(props) =>
    props.position === "right" &&
    `${props.xMargin ? props.xMargin + 1 : 1}rem`};
`;

export const Main = styled.main.attrs<{
  slider?: string;
  sliding?: string;
  split?: number;
}>((props) => ({
  className: `flex nowrap w-full ${props.sliding ? "" : "transition-slider"} ${
    !props.slider ? "h-full" : ""
  } ${props.split ? "transition-slider" : ""}`,
}))<{
  slider?: string | undefined;
  sliding: string | undefined;
  split?: number;
  pos?: number;
  restItems?: number;
  numItems?: number;
  xMargin?: number;
  dir: Dir;
}>`
  transform: ${(props) => {
    if (!props.split && props.slider && !props.sliding)
      return "translateX(calc(-100%))";
    if (!props.split && props.slider && props.dir === Dir.PREV)
      return "translateX(calc(2 * (-100%)))";
    if (!props.split && props.slider) return "translateX(0%)";
    if (
      props.split &&
      props.pos &&
      props.numItems &&
      props.restItems &&
      props.xMargin
    ) {
      return props.pos === Math.floor((props.numItems - 1) / props.split)
        ? `translateX(${lastMove({
            restItems: props.restItems,
            split: props.split,
            xMargin: props.xMargin,
            pos: props.pos,
          })})`
        : `translateX(-${100 * props.pos}%)`;
    }
  }};
`;

export const CarouselSlot = styled.div.attrs<{
  slider?: string;
  split?: number;
}>((props) => ({
  className: `${
    !props.slider ? "transition-opacity duration-1000" : "relative"
  }`,
}))<{
  pos: number;
  index: number;
  order?: number;
  split?: number;
  xMargin?: number;
  slider?: string;
}>`
  flex: 0 0
    ${(props) =>
      props.split && props.xMargin
        ? `calc(100% / ${props.split} - ${2 * props.xMargin}rem)`
        : "100%"};
  transform: ${(props) => !props.slider && `translateX(-${100 * props.pos}%)`};
  opacity: ${(props) => !props.slider && (props.index === props.pos ? 1 : 0.5)};
  order: ${(props) => props.slider && props.order};
  margin-right: ${(props) => (props.xMargin ? `${props.xMargin}rem` : 0)};
  margin-left: ${(props) => (props.xMargin ? `${props.xMargin}rem` : 0)};
`;

export const SliderNavContainer = styled.div.attrs({
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

export const ImagesContainer = styled.div.attrs({
  className:
    "flex flex-row gap-4 md:flex-col py-4 md:px-4 md:py-0 items-center",
})``;

export const ImageContainer = styled.div.attrs({
  className: "relative w-16 h-16",
})<{ pos: number; index: number; numItems: number }>`
  cursor: pointer;
  outline-width: ${(props) =>
    props.pos + 1 === props.index ||
    props.pos === props.index + props.numItems - 1
      ? "3px"
      : "0px"};
  outline-color: ${(props) =>
    props.pos + 1 === props.index ||
    props.pos === props.index + props.numItems - 1
      ? props.theme.colors.primary
      : "inherit"};
  outline-style: ${(props) =>
    props.pos + 1 === props.index ||
    props.pos === props.index + props.numItems - 1
      ? "solid"
      : "inherit"};
  border-radius: 0.1rem;
`;
