import styled from '@emotion/styled';

export const NextButtonWrapper = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding: 0;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 0 8px 8px 0;
`;
