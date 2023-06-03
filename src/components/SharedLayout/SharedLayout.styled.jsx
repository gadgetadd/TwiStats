import styled from '@emotion/styled';

export const Header = styled.header`
  height: 60px;
  background-color: darkorchid;
`;

export const Container = styled.div`
  min-height: calc(100vh - 120px);
  padding: 0 15px;
  width: 442px;
  margin: 0 auto;
  @media screen and (min-width: 838px) {
    width: 838px;
  }

  @media screen and (min-width: 1266px) {
    width: 1266px;
  }
`;

export const Footer = styled.footer`
  height: 60px;
  background-color: darkorchid;
`;
