import styled, { keyframes } from "styled-components";
import BaseAnimation from "../BaseAnimation/BaseAnimation.js";

export const ContainerLoader = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const IsRotating = keyframes`
   to {transform: rotate(1turn)}
`;

export const Loader = styled(BaseAnimation)`
  animation-name: ${IsRotating};
  border-radius: 50%;
  border-top-color: #3dbee8;
  border: 6px solid #e5e5e5;
  height: 80px;
  width: 80px;
`;
