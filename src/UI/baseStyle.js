import styled, { css } from 'styled-components';

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

export const CommonFormTextStyle = css`
  font-size: 18px;
  color: #121417;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const LinkButton = styled.button`
  display: block;
  margin-top: 100px;
  margin-inline: auto;
  line-height: 24px;
  font-size: 18px;
  background-color: transparent;
  text-decoration: underline;
  outline: none;
  border: none;
  color: #3470ff;
  transition: background-color ease-in-out 250ms;
  text-align: center;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
