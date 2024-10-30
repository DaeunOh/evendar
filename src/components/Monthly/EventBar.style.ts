import styled from '@emotion/styled';

export const EventBarWrapper = styled.div<{ $days: number; $index: number; $color?: string }>`
  display: flex;
  width: ${({ $days }) => `calc(${$days}00% - 2px + ${$days - 1}px)`};
  height: 22px;
  position: absolute;
  font-size: 24px;
  top: ${({ $index }) => `${$index}em`};
  align-items: center;
  padding: 0 10px 0 8px;
  margin-left: 1px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 10;
  background-color: ${({ $color, theme }) => ($color ? $color : theme.color.system.primary)};
  color: ${({ theme }) => theme.color.white[100]};
  :not(:last-of-type) {
    margin-bottom: 2px;
  }
`;

export const EventTitle = styled.span`
  ${({ theme }) => theme.text.s.medium};
`;
