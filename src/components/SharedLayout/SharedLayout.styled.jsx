import styled from '@emotion/styled';

export const Header = styled.header`
  height: 64px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 0.99%,
    #814dde 54.28%,
    #4b2a99 78.99%
  );
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  width: 412px;
  margin: 0 auto;
  @media screen and (min-width: 840px) {
    width: 840px;
  }

  @media screen and (min-width: 1268px) {
    width: 1268px;
  }
`;

export const Main = styled.main`
  background-color: #f9f9e197;
  min-height: calc(100vh - 128px);
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: #ebd8ff;
  margin: 15px 0;
`;

export const Footer = styled.footer`
  height: 64px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 0.99%,
    #814dde 54.28%,
    #4b2a99 78.99%
  );
`;

export const About = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: #373737;
`;
