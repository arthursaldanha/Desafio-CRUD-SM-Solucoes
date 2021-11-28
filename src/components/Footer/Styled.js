import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  align-items: center;
  background-color: #1B232A;
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
  color: #5ED5A8;
  text-decoration: none;
  transition: all 0.5s ease-out;
  &:hover {
    color: #5ED5A8;
    text-decoration: underline;
  }
`;
