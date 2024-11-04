import styled from '@emotion/styled';

export const ToolbarTitleWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 20px;
  ${({ theme }) => theme.text.l.medium};
  color: ${({ theme }) => theme.color.gray[900]};
`;
