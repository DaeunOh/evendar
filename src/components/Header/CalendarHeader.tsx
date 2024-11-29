import { memo } from 'react';
import { DateTime } from 'luxon';
import { HeaderProps } from '@constants/interfaces';
import * as S from './CalendarHeader.style';

const CalendarHeader = memo(
  ({ initialDate = DateTime.now(), firstDay = 7, viewMode = 'month', duration = { days: 7 } }: HeaderProps) => {
    const startOfWeek =
      firstDay === 7
        ? initialDate.set({ weekday: firstDay }).minus({ weeks: 1 })
        : initialDate.set({ weekday: firstDay });
    const daysOfWeek = Array.from({ length: duration.days || 7 }).map((_, index) =>
      startOfWeek.plus({ days: index }).startOf('day'),
    );

    return (
      <S.CalendarHeaderContainer className="evd-col-header" $viewMode={viewMode}>
        {daysOfWeek.map(date => (
          <S.WeekDay
            className="evd-col-header-cell"
            key={date.weekdayShort}
            $isHoliday={date.weekday === 7}
            $viewMode={viewMode}
          >
            {viewMode !== 'month' && (
              <S.Day $isToday={date.toFormat('yyyy-LL-dd') === DateTime.now().toFormat('yyyy-LL-dd')}>{date.day}</S.Day>
            )}
            {date.weekdayShort}
          </S.WeekDay>
        ))}
      </S.CalendarHeaderContainer>
    );
  },
);

export default CalendarHeader;
