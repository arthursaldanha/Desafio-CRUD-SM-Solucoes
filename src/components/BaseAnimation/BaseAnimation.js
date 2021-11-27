import styled from "styled-components";

const BaseAnimation = styled.div`
  animation-delay: ${(props) => props.delay};
  animation-direction: ${(props) => props.direction};
  animation-duration: ${(props) => props.duration};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-play-state: ${(props) => props.playState};
  animation-timing-function: ${(props) => props.timingFunction};
  display: ${(props) => props.display};
`;

BaseAnimation.defaultProps = {
  delay: "0s",
  direction: "normal",
  display: "block",
  duration: "1s",
  fillMode: "both",
  iterationCount: "1",
  playState: "running",
  timingFunction: "ease",
};

export default BaseAnimation;
