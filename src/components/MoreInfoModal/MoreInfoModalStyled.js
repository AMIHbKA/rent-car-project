import styled from 'styled-components';
import { CommonButtonStyles } from 'UI/baseStyle';

export const MoreInfoWrapper = styled.div`
  width: 541px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;

  img {
    width: 100%;
    border-radius: 14px;
  }

  & > .second-text {
    width: 277px;
    height: 100%;
  }

  & > .description-text {
    margin-top: 14px;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(20 / 14);
  }

  & > .subtitle-text {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(20 / 14);
  }
`;

export const Condition = styled.p`
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 12); /* 150% */
  letter-spacing: -0.24px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const ConditionContainer = styled.div`
  align-items: center;
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  display: block;
  margin-top: 24px;
  ${CommonButtonStyles}
  text-align: center;
  width: 168px;
  line-height: 44px;
`;
