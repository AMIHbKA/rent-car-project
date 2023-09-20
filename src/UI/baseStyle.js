import { css } from 'styled-components';

export const CommonButtonStyles = css`
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  outline: none;
  border: transparent;
  height: 44px;
  width: 100%;
  font-weight: 600;
  transition: background-color ease-in-out 250ms;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
