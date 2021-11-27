import styled from 'styled-components';

export const ListUsers = styled.div``;

export const ContainerListUsers = styled(ListUsers)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 50px);
  padding-top: 80px;
`;

export const ContainerCards = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1000px;
`;
