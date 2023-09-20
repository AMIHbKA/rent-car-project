import styled from 'styled-components';
import { CommonButtonStyles } from 'UI/baseStyle';

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgb(18 20 23 / 0.5) 2.5%,
      rgb(18 20 23 / 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
  object-position: center;
`;

export const MainText = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: calc(24 / 16);
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SecondText = styled.p`
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  line-height: calc(18 / 12);
  color: rgb(18 20 23 / 0.5);
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Wrapper = styled.div`
  ${props => props.flex && `display: flex;`}
  ${props => props.block && `display: block;`}
  ${props => props.inline && `display: inline;`}
  ${props => props.inBlock && `display: inline-block;`}
  
  ${props =>
    props.jc &&
    `
    justify-content: ${props.jc};
  `}

  ${props =>
    props.ai &&
    `
    align-items: ${props.ai};
  `}

   ${props =>
    props.gap &&
    `
    gap: ${props.gap};
  `}

${props => props.w && `width: ${props.w};`}
${props => props.h && `height: : ${props.h};`}
${props => props.minW && `min-width: ${props.w};`}
${props => props.minH && `min-height: ${props.h};`}
${props => props.maxW && `max-width: ${props.w};`}
${props => props.maxH && `max-height: ${props.h};`}


  ${props => props.outline && `outline: 1px red solid;`}
`;

export const Button = styled.button`
  ${CommonButtonStyles}
  margin-top: 28px;
`;
