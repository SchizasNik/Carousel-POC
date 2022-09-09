import styled from 'styled-components';
import { primaryColor, buttonBoderColor } from '../system/colors';
import { primaryTransition } from '../system/transitions';

export const SlideButton = styled.button`
  border: 1px solid ${primaryColor};
  border-radius: 4px;
  background: #ffffff;
  color: ${primaryColor};
  font-family: mulish;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px 16px 24px;
  transition: ${primaryTransition};
  margin: 1px;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 2px solid ${buttonBoderColor};
  }
`;
