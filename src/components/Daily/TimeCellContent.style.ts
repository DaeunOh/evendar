import styled from '@emotion/styled';

export const TimeCellContentContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  position: relative;
  min-width: 100px;
  border-right: 1px solid ${({ theme }) => theme.color.gray[200]};
  :last-of-type {
    border-right: 0px;
  }
`;
