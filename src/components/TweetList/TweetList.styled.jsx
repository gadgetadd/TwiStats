import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
  width: 380px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 808px) {
    width: 808px;
  }

  @media screen and (min-width: 1236px) {
    width: 1236px;
  }
`;
