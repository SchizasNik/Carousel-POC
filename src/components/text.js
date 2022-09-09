import styled from 'styled-components';
import { createClamp } from '../system/utils';

export const responsiveH1 = styled.h1`
  margin: 0;
  font-size: ${createClamp({
    min: 3.4,
    max: 4.8,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'rem',
    variableMetricUnit: 'vw',
    factorMultiplier: 1000,
  })};
`;

export const responsiveH2 = styled.h2`
  margin: 0;
  font-size: ${createClamp({
    min: 3.0,
    max: 3.2,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'rem',
    variableMetricUnit: 'vw',
    factorMultiplier: 1000,
  })};
`;

export const responsiveH3 = styled.h3`
  margin: 0;
  font-size: ${createClamp({
    min: 1.8,
    max: 2.0,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'rem',
    variableMetricUnit: 'vw',
    factorMultiplier: 1000,
  })};
`;
