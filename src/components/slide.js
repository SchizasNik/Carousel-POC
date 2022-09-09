import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { SlideButton } from './slide_button';
import { Row, Column, Spacer } from '../system/layout';
import {
  publicURL,
  minSlideWidth,
  maxSlideWidth,
  minSlideHeight,
  maxSlideHeight,
} from '../system/variables';
import { createClamp } from '../system/utils';
import { responsiveH2 } from '../components/text';

const widthClamp = createClamp({
  min: minSlideWidth,
  max: maxSlideWidth,
  pointMin: 320,
  pointMax: 1440,
  constantMetricUnit: 'px',
  variableMetricUnit: 'vw',
  factorMultiplier: 100,
});

const SlideContainer = styled(Column)`
  width: ${widthClamp};
`;

const SlideElement = styled.div`
  flex: auto;
`;

const SlideImage = styled.img`
  width: ${widthClamp};
  height: ${createClamp({
    min: minSlideHeight,
    max: maxSlideHeight,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'px',
    variableMetricUnit: 'vw',
    factorMultiplier: 100,
  })};
`;

const SlideTitle = styled(responsiveH2)`
  width: ${createClamp({
    min: 248,
    max: 290,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'px',
    variableMetricUnit: 'vw',
    factorMultiplier: 100,
  })};
  font-weight: 800;
`;

const SlideList = styled.ul`
  margin: 0;
  padding: 0;
`;
const SlideListItem = styled.li`
  padding: 5px 0 5px 0;
  font-size: 1.8rem;
  list-style: none;
  text-align: left;
  ${(props) => (props.bold ? 'font-weight:800' : '')}
`;

export const Slide = forwardRef(
  ({ id, imageURL, title, questions, CTA, 'data-testid': testid }, ref) => {
    return (
      <SlideContainer ref={ref} data-testid={testid}>
        {/* image container */}
        <SlideElement>
          <SlideImage
            src={`${publicURL}/${imageURL}`}
            alt={`slider_image_${id}`}
          />
        </SlideElement>
        <Spacer height={36} />
        {/* information container */}
        <SlideElement>
          <Column>
            <SlideTitle>{title}</SlideTitle>
            <Spacer height={13} />
            <SlideList>
              {questions.map((question) => (
                <SlideListItem key={question.text} bold={question.bold}>
                  {question.text}
                </SlideListItem>
              ))}
            </SlideList>
          </Column>
        </SlideElement>
        <Spacer height={17} />
        {/* cta container */}
        <SlideElement>
          <Row>
            <SlideButton>{CTA}</SlideButton>
          </Row>
        </SlideElement>
      </SlideContainer>
    );
  }
);
