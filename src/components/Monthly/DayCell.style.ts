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

export const MoreButton = styled.div`
  display: flex;
  flex-shrink: 0;
  width: fit-content;
  height: 22px;
  align-items: center;
  margin: 4px 5px 6px auto;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.color.system.primary};
  border-radius: 50px;
  color: #6d8c4d;
  ${({ theme }) => theme.text.s.medium};
  cursor: pointer;
`;
