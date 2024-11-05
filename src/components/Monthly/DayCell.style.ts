import styled from '@emotion/styled';

export const DayCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.color.gray[200]};
  :last-of-type {
    border-right: none;
  }
`;
