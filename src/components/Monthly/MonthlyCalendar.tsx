import { DateTime } from 'luxon';
import { CalendarProps } from '@constants/interfaces';
import { CalendarHeader } from '@components/Header';
import DayCell from './DayCell';
import * as S from './MonthlyCalendar.style';

const MonthlyCalendar = ({
  month = DateTime.now().month,
  width = '100%',
  height = '100%',
  firstDay = 7,
}: CalendarProps) => {
  const startOfMonth = DateTime.fromObject({ month });
  const startOfMonthView =
    startOfMonth.weekday === firstDay ? startOfMonth : startOfMonth.set({ weekday: firstDay }).minus({ weeks: 1 });
  const daysOfMonthView = Array.from({ length: 42 }, (_, i) => startOfMonthView.plus({ days: i }));

  return (
    <S.MonthlyCalendarContainer className="evd-monthly-calendar" width={width} height={height}>
      <CalendarHeader firstDay={firstDay} />
      <S.CellContainer className="evd-day-cell-container">
        {Array.from({ length: Math.ceil(daysOfMonthView.length / 7) }).map((_, i) => (
          <S.DayCellRow key={`week-${i}`} className="evd-day-cell-row">
            {daysOfMonthView.slice(i * 7, (i + 1) * 7).map(date => (
              <DayCell key={date.toISODate()} month={month} date={date} />
            ))}
          </S.DayCellRow>
        ))}
      </S.CellContainer>
    </S.MonthlyCalendarContainer>
  );
};
export default MonthlyCalendar;
