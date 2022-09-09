import styled from 'styled-components';
import { ReactComponent as ArrowSVG } from '../assets/icons/arrow.svg';
import { primaryColor } from '../system/colors';
import { primaryTransition } from '../system/transitions';
import { orientationRight } from '../system/variables';

const ArrowDiv = styled.button`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  width: 48px;
  height: 48px;
  border: 1px solid ${primaryColor};
  border-radius: 25px;
  transition: ${primaryTransition};
  ${(props) =>
    props.disabled
      ? ''
      : `&:hover {
    background: ${primaryColor};
  }
  &:hover > svg {
    fill: #ffffff;
  }`}
`;

const StyledArrow = styled(ArrowSVG)`
  display: block;
  margin: auto;
  transition: ${primaryTransition};
  fill: ${primaryColor};
  transform: ${(props) =>
    props.orientation === orientationRight ? 'scaleX(-1)' : 'none'};
`;

export function SlideArrow({
  orientation,
  onClick,
  disabled,
  'data-testid': testId,
}) {
  return (
    <ArrowDiv data-testid={testId} disabled={disabled} onClick={onClick}>
      <StyledArrow orientation={orientation} />
    </ArrowDiv>
  );
}
