import { DateTime } from 'luxon';
import { CalendarProps } from '@constants/interfaces';
import { CalendarHeader } from '@components/Header';
import TimeCellContent from './TimeCellContent';
import AllDayCell from './AllDayCell';
import * as S from './DailyCalendar.style';

const DailyCalendar = ({
  initialDate = DateTime.now(),
  width = '100%',
  height = '100%',
  duration = { days: 7 },
}: CalendarProps) => {
  return (
    <S.DailyCalendarContainer className="evd-daily-calendar" width={width} height={height}>
      <CalendarHeader viewMode="week" initialDate={initialDate} duration={duration} />
      <S.AllDayCellContainer className="evd-allday-cell-container">
        <S.AllDaySlot className="evd-allday-slot">AllDay</S.AllDaySlot>
        <S.AllDayCellRow className="evd-allday-cell-row">
          {Array.from({ length: duration.days || 7 }).map((_, index) => (
            <AllDayCell key={index} />
          ))}
        </S.AllDayCellRow>
      </S.AllDayCellContainer>
      <S.TimeCellContainer className="evd-time-cell-container">
        <S.TimeSlotCol className="evd-time-slot-col">
          {Array.from({ length: 24 }).map((_, i) => (
            <S.TimeSlot key={i} className="evd-time-slot">
              <S.Time className="evd-time">{`${i % 12 ? i % 12 : 12} ${i < 12 ? 'AM' : 'PM'}`}</S.Time>
            </S.TimeSlot>
          ))}
        </S.TimeSlotCol>
        <S.TimeCellContentContainer className="evd-time-cell-content-container">
          <S.TimeCellGrid className="evd-time-cell-grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <S.TimeCellGridLine key={i} className="evd-time-cell-grid-line" />
            ))}
          </S.TimeCellGrid>
          {Array.from({ length: duration.days || 7 }).map((_, index) => (
            <TimeCellContent key={index} />
          ))}
        </S.TimeCellContentContainer>
      </S.TimeCellContainer>
    </S.DailyCalendarContainer>
  );
};

export default DailyCalendar;
