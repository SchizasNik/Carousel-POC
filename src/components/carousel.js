import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Column, Spacer } from '../system/layout';
import { orientationRight } from '../system/variables';
import { debounce } from '../system/utils';
import { SlideArrow } from './slide_arrow';

const CarouselContainer = styled.div`
  overflow: hidden;
`;

// if we happen on a very small window for whatever reason,
// lets not fade out only visible slide
const willHideActiveSlide = (props) => {
  return props.activeIndex === props.partialIndex;
};

const CarouselInnerContainer = styled(Row)`
  transition: transform 0.5s;
  transform: ${(props) =>
    `translateX(-${
      props.activeIndex * (props.slideWidth + props.slideGap)
    }px)`};
  > *:nth-child(${(props) =>
        willHideActiveSlide(props) ? 0 : props.partialIndex + 1}) {
    opacity: 0.2;
  }
  > * {
    transition: opacity 0.5s;
  }
  gap: ${(props) => `${props.slideGap}px`};
`;

export function Carousel({ children, slideGap = 24 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [partialOffset, setPartialOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const updatePartialOffset = () => {
    if (containerRef.current && slideRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const slideWidth = slideRef.current.offsetWidth;
      setSlideWidth(slideWidth);
      const partialSlideOffset = Math.floor(
        containerWidth / (slideWidth + slideGap)
      );

      setPartialOffset(partialSlideOffset);
    }
  };
  // update partially visible slide while traversing the carousel
  useEffect(() => {
    updatePartialOffset();
  }, []);
  // update partially visible slide when window resizes
  useEffect(() => {
    window.addEventListener('resize', debounce(updatePartialOffset));
    return () =>
      window.removeEventListener('resize', debounce(updatePartialOffset));
  }, []);

  const leftDisabled = activeIndex === 0;
  // there is no slide that is not visible
  const rightDisabled = activeIndex + partialOffset > children.length - 1;

  const slideLeft = () => {
    if (leftDisabled) return;
    setActiveIndex((index) => index - 1);
  };

  const slideRight = () => {
    if (rightDisabled) return;
    setActiveIndex((index) => index + 1);
  };

  return (
    <CarouselContainer data-testid="carousel" ref={containerRef}>
      <Column>
        <CarouselInnerContainer
          activeIndex={activeIndex}
          slideWidth={slideWidth}
          partialIndex={activeIndex + partialOffset}
          slideGap={slideGap}
        >
          {children.map((child, index) =>
            React.cloneElement(child, {
              'data-testid': `slide-${index + 1}`,
              ref: slideRef,
            })
          )}
        </CarouselInnerContainer>
        <Spacer height={40} />
        <Row>
          <SlideArrow
            data-testid="carousel-left-button"
            disabled={leftDisabled}
            onClick={slideLeft}
          />
          <Spacer width={16} />
          <SlideArrow
            data-testid="carousel-right-button"
            disabled={rightDisabled}
            onClick={slideRight}
            orientation={orientationRight}
          />
        </Row>
      </Column>
    </CarouselContainer>
  );
}
