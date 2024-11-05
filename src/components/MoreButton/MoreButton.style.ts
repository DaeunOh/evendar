import styled from '@emotion/styled';

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
