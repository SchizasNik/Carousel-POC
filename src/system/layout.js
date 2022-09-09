import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.mainAxis ? props.mainAxis : 'flex-start'};
  align-items: ${(props) => (props.crossAxis ? props.crossAxis : 'flex-start')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.mainAxis ? props.mainAxis : 'flex-start'};
  align-items: ${(props) => (props.crossAxis ? props.crossAxis : 'flex-start')};
`;

export const Spacer = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
`;
