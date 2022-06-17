import { forwardRef } from "react";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const Helper = (props: { children: React.ReactNode; className: string }) => (
  <div className={props.className}>{props.children}</div>
);

Helper.displayName = "Helper";

export const CarouselContainer = styled(Helper).attrs({
  className: "relative overflow-hidden",
})``;

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

export const Main = (props: { children: React.ReactNode }) => (
  <main className="flex nowrap">{props.children}</main>
);

const CarouselSlotHelper = (props: {
  children: React.ReactNode;
  pos: number;
  index: number;
  className?: string;
}) => <div className={props.className}>{props.children}</div>;

export const CarouselSlot = styled(CarouselSlotHelper).attrs<{
  pos: number;
  index: number;
}>({
  className:
    "transition-opacity duration-1000 h-60 w-40 md:w-52 md:h-72 xl:w-60 xl:h-80",
})`
  flex: 0 0 100%;
  transform: ${(props) => `translateX(${-100 * props.pos}%)`};
  opacity: ${(props) => (props.index === props.pos ? 1 : 0.5)};
`;
