import styled from '@emotion/styled';

export const DayCellHeaderWrapper = styled.div<{ $isToday: boolean }>`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  align-items: center;
  ${({ $isToday, theme }) =>
    $isToday &&
    `
    padding-left: 10px;
    > span {
      display: flex;
      width: 26px;
      height: 26px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${theme.color.system.primary};
      color: ${theme.color.white[100]};
    }
  `};
`;

export const DateText = styled.span<{ $isHoliday: boolean; $isSameMonth: boolean }>`
  ${({ theme }) => theme.text.xs.medium};
  ${({ $isHoliday, theme }) => $isHoliday && `color: ${theme.color.validation.negative};`}
  ${({ $isSameMonth }) => !$isSameMonth && `opacity: 30%;`}
`;
