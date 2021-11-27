import styled, { keyframes } from "styled-components";

const IsRotating = keyframes`
	0% {
  	transform: rotate(0)
  }
	100% {
  	transform: rotate(360deg)
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
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 50%;
  border-top-color: #184e77;
  border: 6px solid #fff;
  height: 80px;
  width: 80px;
`;
