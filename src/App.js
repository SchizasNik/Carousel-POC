import { Slide } from './components/slide';
import styled from 'styled-components';
import slideData from './slide_data.json';
import { Carousel } from './components/carousel';
import { Column, Spacer } from './system/layout';
import { createClamp } from './system/utils';
import { responsiveH1, responsiveH3 } from './components/text';

const PageContainer = styled.div`
  display: flex;
  margin-top: ${createClamp({
    min: 60,
    max: 100,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'px',
    variableMetricUnit: 'vw',
    factorMultiplier: 100,
  })};
  margin-left: ${createClamp({
    min: 36,
    max: 120,
    pointMin: 320,
    pointMax: 1440,
    constantMetricUnit: 'px',
    variableMetricUnit: 'vw',
    factorMultiplier: 100,
  })};
`;
const TitleContainer = styled.div``;
const Title = styled(responsiveH1)`
  font-weight: 800;
`;
const SubTitle = styled(responsiveH3)`
  font-weight: 400;
`;
const PageColumn = styled(Column)`
  overflow: hidden;
`;

function App() {
  return (
    <PageContainer>
      <PageColumn crossAxis="stretch">
        <TitleContainer>
          <Title data-testid="title">Latana Knowledge Center</Title>
          <SubTitle data-testid="subtitle">
            Everything you need to know about the best brand tracking solution
            in the world
          </SubTitle>
        </TitleContainer>
        <Spacer height={60} />
        <Carousel>
          {slideData.map((singleSlideData) => (
            <Slide key={singleSlideData.id} {...singleSlideData} />
          ))}
        </Carousel>
      </PageColumn>
    </PageContainer>
  );
}

export default App;
