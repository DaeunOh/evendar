import { memo } from 'react';
import { DateTime, WeekdayNumbers } from 'luxon';
import { HeaderProps } from '@constants/interfaces';
import * as S from './CalendarHeader.style';

const CalendarHeader = memo(({ firstDay = 7 }: HeaderProps) => {
  const daysOfWeek = Array.from({ length: 7 }).map((_, index) =>
    DateTime.fromObject({ weekday: ((firstDay + index) % 7 || 7) as WeekdayNumbers }),
  );

  return (
    <S.CalendarHeaderContainer className="evd-col-header">
      {daysOfWeek.map(date => (
        <S.WeekDay className="evd-col-header-cell" key={date.weekdayShort} $isHoliday={date.weekday === 7}>
          {date.weekdayShort}
        </S.WeekDay>
      ))}
    </S.CalendarHeaderContainer>
  );
});

export default CalendarHeader;
