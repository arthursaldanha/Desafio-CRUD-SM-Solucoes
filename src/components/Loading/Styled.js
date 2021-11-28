import styled, { keyframes } from 'styled-components';

const IsRotating = keyframes`
	to {
  	transform: rotate(1turn)
  }
`;

export const Container = styled.div`
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

export const Loader = styled.div`
  animation-name: ${IsRotating};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #1B232A;
  height: 80px;
  width: 80px;
`;
