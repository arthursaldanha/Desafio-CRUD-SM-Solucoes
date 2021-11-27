import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  align-items: center;
  background-color: #184e77;
  display: flex;
  justify-content: center;
  min-height: 50px;
  width: 100%;
`;

export const ContainerFooter = styled.div`
  text-align: center;
`;

export const TextFooter = styled.p`
  color: #fff;
  font-weight: 500;
`;

export const NavLink = styled(Link)`
  color: #45c9a3;
  text-decoration: none;
  &:hover {
    color: #52b69a;
    text-decoration: underline;
  }
`;
