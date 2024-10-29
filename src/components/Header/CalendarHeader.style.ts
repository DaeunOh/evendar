import styled from '@emotion/styled';

export const CalendarHeaderContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 26px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

export const WeekDay = styled.div<{ $isHoliday: boolean }>`
  display: flex;
  width: 100%;
  margin: 3px 0 0 16px;
  ${({ theme }) => theme.text.xs.bold};
  ${({ $isHoliday, theme }) => $isHoliday && `color: ${theme.color.validation.negative};`}
`;
