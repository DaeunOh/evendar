import styled from '@emotion/styled';

export const EventBarWrapper = styled.div<{ $days: number; $height: number; $index: number; $color?: string }>`
  display: flex;
  position: absolute;
  width: ${({ $days }) => `calc(${$days}00% - 2px + ${$days - 1}px)`};
  ${({ $height }) => `height: ${$height}px; font-size: ${$height + 2}px;`};
  top: ${({ $index }) => `${$index}em`};
  align-items: center;
  padding: 0 10px 0 8px;
  margin-left: 1px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 10;
  background-color: ${({ $color, theme }) => ($color ? $color : theme.color.system.primary)};
  color: ${({ theme }) => theme.color.white[100]};
`;

export const EventTitle = styled.span`
  ${({ theme }) => theme.text.s.medium};
`;
