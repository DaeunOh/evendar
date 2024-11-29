import styled from '@emotion/styled';

export const AllDayCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  position: relative;
  min-width: 100px;
  min-height: 60px;
  max-height: 194px;
  border-right: 1px solid ${({ theme }) => theme.color.gray[200]};
  :last-of-type {
    border: 0;
  }
`;
