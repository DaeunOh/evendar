import styled from '@emotion/styled';
import { ViewMode } from '@constants/interfaces';

export const CalendarHeaderContainer = styled.div<{ $viewMode: ViewMode }>`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 26px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
  ${({ $viewMode }) =>
    $viewMode !== 'month' &&
    `
      height: 32px;
      padding-left:60px;
  `}
`;

export const WeekDay = styled.div<{ $isHoliday: boolean; $viewMode: ViewMode }>`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 3px 0 0 16px;
  ${({ theme }) => theme.text.xs.bold};
  ${({ $isHoliday, theme }) => $isHoliday && `color: ${theme.color.validation.negative};`}
  ${({ $viewMode, theme }) => $viewMode !== 'month' && `${theme.text.xs.bold};`}
`;

export const Day = styled.div<{ $isToday: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 4px;
  ${({ $isToday, theme }) =>
    $isToday &&
    `
      width: 20px;
      height: 20px;
      justify-content: center;
      border: 0;
      border-radius: 50%;
      color: ${theme.color.white[100]};
      background-color: ${theme.color.system.primary};
  `}
`;
