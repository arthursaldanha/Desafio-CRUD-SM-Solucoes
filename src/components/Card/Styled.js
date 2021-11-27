import styled from "styled-components";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";

export const ContainerCard = styled.div`
  align-items: center;
  background-color: #1a759f;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 250px;
  padding: 1.5rem;
  width: 100%;
`;

export const ImageCard = styled.div``;
export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid #76c893;
  margin-bottom: 10px 0;
`;

export const NameCard = styled(ImageCard)``;
export const Name = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const EmailCard = styled(ImageCard)``;
export const Email = styled(Name)``;

export const NavLink = styled(Link)``;

export const EditPencilCard = styled(ImageCard)``;
export const Pencil = styled(GoPencil)`
  color: #fff;
  height: 25px;
  width: 25px;
`;
