import styled from '@emotion/styled';

export const PopoverHeader = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0 20px;
  color: #6d8c4d;
  ${({ theme }) => theme.text.l.bold};
`;

export const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  padding: 0 12px 12px;
  gap: 2px;
`;

export const EventBar = styled.div<{ $color?: string }>`
  display: flex;
  width: 100%;
  height: 22px;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ $color, theme }) => ($color ? $color : theme.color.system.primary)};
  color: white;
  ${({ theme }) => theme.text.s.medium};
`;
