import Image from "next/image";
import { Children } from "react";
import Slider from "./slider";
import {
  ImageContainer,
  ImagesContainer,
  ImagesNavigator,
  MainImage,
  SliderNavContainer,
} from "./style";
import { CarouselState, Dir } from "./types";

const SliderWithNav = ({
  children,
  slide,
  state,
  numItems,
}: {
  children: React.ReactNode;
  slide: (dir: Dir, index?: number) => void;
  state: CarouselState;
  numItems: number;
}) => {
  return (
    <SliderNavContainer>
      <ImagesNavigator>
        <ImagesContainer>
          {Children.map(children, (child, index) => (
            <ImageContainer
              pos={state.pos}
              index={index}
              numItems={numItems}
              onMouseEnter={() => {
                slide(Dir.ON_CHANGE, index);
              }}
            >
              {child}
            </ImageContainer>
          ))}
        </ImagesContainer>
      </ImagesNavigator>
      <MainImage>
        <Slider slider nav slide={slide} state={state} numItems={numItems}>
          {children}
        </Slider>
      </MainImage>
    </SliderNavContainer>
  );
};

export default SliderWithNav;
