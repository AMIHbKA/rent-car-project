import styled from 'styled-components';
import { Container } from 'UI/Container';

export const Header = styled.header`
  & > ${Container} {
    padding-block: 20px;
  }

  border-bottom: 2px #3470ff solid;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
  font-size: 20px;
  font-weight: 600;

  a.active {
    color: #3470ff;
  }
`;
