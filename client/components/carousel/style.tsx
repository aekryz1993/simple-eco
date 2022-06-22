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
