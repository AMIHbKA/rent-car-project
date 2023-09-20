import styled from 'styled-components';
import { CommonFormTextStyle } from 'UI/baseStyle';

export const DropListStyle = styled.select`
  ${CommonFormTextStyle}
  font-family: inherit;
  height: 48px;
  background: #f7f7fb;
  border-radius: 14px;
  border-color: transparent;
  padding-inline: 18px;

  &.brand {
    width: 274px;
  }

  &.price {
    width: 125px;
  }
`;
