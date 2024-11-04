import styled from '@emotion/styled';

export const PrevButtonWrapper = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px 0 0 8px;
`;
