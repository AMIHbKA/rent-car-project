import styled from 'styled-components';

export const DropListStyle = styled.select`
  font-family: inherit;
  font-size: 18px;
  background: #f7f7fb;
  border-radius: 14px;

  &.brand {
    width: 274px;
    padding: 14px 18px;
  }

  &.price {
    width: 125px;
    padding: 14px 18px;
  }

  ${props => props.w && `width: ${props.w};`}
  ${props => props.h && `height: ${props.h};`}
${props => props.minW && `min-width: ${props.w};`}
${props => props.minH && `min-height: ${props.h};`}
${props => props.maxW && `max-width: ${props.w};`}
${props => props.maxH && `max-height: ${props.h};`}


  ${props => props.outline && `outline: 1px red solid;`}
`;
