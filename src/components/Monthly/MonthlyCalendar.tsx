import { useState, useRef, useEffect } from 'react';
import { DateTime, Interval } from 'luxon';
import { CalendarProps } from '@constants/interfaces';
import { EventModel } from '@models';
import { filterByDateRange, sortByDate, groupByDate, sortByOrder } from '@utils';
import { CalendarHeader } from '@components/Header';
import DayCell from './DayCell';
import * as S from './MonthlyCalendar.style';

const MonthlyCalendar = ({
  month = DateTime.now().month,
  events: monthlyEvents,
  width = '100%',
  height = '100%',
  firstDay = 7,
  order = ['-allDay', 'start'],
  eventHeight = 22,
  maxEvents,
  moreButtonContent,
  onMoreButtonClick,
}: CalendarProps) => {
  const [splitedEventMap, setSplitedEventMap] = useState<Map<string, EventModel[]>>(new Map());
  const [maxEventCount, setMaxEventCount] = useState(maxEvents ?? 0);
  const rowRef = useRef<HTMLDivElement>(null);
  const startOfMonth = DateTime.fromObject({ month }) as DateTime<true>;
  const startOfMonthView =
    startOfMonth.weekday === firstDay ? startOfMonth : startOfMonth.set({ weekday: firstDay }).minus({ weeks: 1 });
  const daysOfMonthView = Array.from({ length: 42 }, (_, i) => startOfMonthView.plus({ days: i }));

  // TODO: dynamically calculate based on the heights of each component.
  const handleResize = () => {
    if (maxEvents !== undefined || !rowRef.current) return;
    const headerHeight = 44;
    const eventMarginBottom = 2;
    const moreButtonHeight = 32;
    const count = Math.floor(
      (rowRef.current.offsetHeight - headerHeight - moreButtonHeight) / (eventHeight + eventMarginBottom),
    );
    setMaxEventCount(Math.max(0, count));
  };

  useEffect(() => {
    const filterdEventsByMonth = filterByDateRange(
      monthlyEvents,
      daysOfMonthView[0],
      daysOfMonthView[daysOfMonthView.length - 1],
    );
    const sortedByDate = sortByDate(filterdEventsByMonth);
    const groupedMapByDate = groupByDate(sortedByDate);
    const sortedMapByOrder = sortByOrder(groupedMapByDate, order);
    Array.from(sortedMapByOrder.values()).forEach(events => {
      events.forEach((event, index) => {
        const days = Interval.fromDateTimes(event.startDate, event.endDate).count('days');
        if (days < 2) return;
        Array.from({ length: days - 1 }).forEach((_, i) => {
          const start = event.startDate.plus({ days: i + 1 }).toISODate();
          if (!start) return;
          const target = sortedMapByOrder.get(start) ?? [];
          const copied = target.length < index ? target.concat(Array(index).fill(null)).slice() : target.slice();
          copied.splice(index, 0, event);
          sortedMapByOrder.set(start, copied);
        });
      });
    });
    setSplitedEventMap(sortedMapByOrder);
  }, [monthlyEvents]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.MonthlyCalendarContainer className="evd-monthly-calendar" width={width} height={height}>
      <CalendarHeader firstDay={firstDay} />
      <S.CellContainer className="evd-day-cell-container">
        {Array.from({ length: Math.ceil(daysOfMonthView.length / 7) }).map((_, i) => (
          <S.DayCellRow key={`week-${i}`} className="evd-day-cell-row" ref={rowRef}>
            {daysOfMonthView.slice(i * 7, (i + 1) * 7).map((date, index) => (
              <DayCell
                key={date.toISODate()}
                month={month}
                date={date}
                events={splitedEventMap.get(date.toISODate()) ?? []}
                index={index}
                eventHeight={eventHeight}
                maxEvents={maxEventCount}
                moreButtonContent={moreButtonContent}
                onMoreButtonClick={onMoreButtonClick}
              />
            ))}
          </S.DayCellRow>
        ))}
      </S.CellContainer>
    </S.MonthlyCalendarContainer>
  );
};
export default MonthlyCalendar;
