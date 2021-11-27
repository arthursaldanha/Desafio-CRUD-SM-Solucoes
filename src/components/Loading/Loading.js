import * as S from "./Styled.js";

const Loading = () => {
  return (
    <S.ContainerLoader>
      <S.Loader duration="1s" timingFunction="infinite" />
    </S.ContainerLoader>
  );
};

export default Loading;
