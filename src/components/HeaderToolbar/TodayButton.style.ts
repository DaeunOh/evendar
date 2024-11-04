import styled from '@emotion/styled';

export const TodayButtonWrapper = styled.button`
  display: flex;
  width: fit-content;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  ${({ theme }) => theme.text.s.regular};
  color: ${({ theme }) => theme.color.gray[900]};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  background: none;
  border-radius: 8px;
`;
