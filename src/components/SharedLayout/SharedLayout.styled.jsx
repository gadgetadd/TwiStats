import styled from '@emotion/styled';

export const Header = styled.header`
  height: 60px;
  background-color: darkorchid;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 0 16px;
  width: 412px;
  margin: 0 auto;
  @media screen and (min-width: 838px) {
    width: 840px;
  }

  @media screen and (min-width: 1266px) {
    width: 1268px;
  }
`;

export const Footer = styled.footer`
  height: 60px;
  background-color: darkorchid;
`;
