import { useState, useRef, useEffect } from 'react';
import { DateTime, Interval } from 'luxon';
import { CalendarProps } from '@constants/interfaces';
import { EventModel } from '@models';
import { filterByDateRange, sortByDate, compareOrder, fillStartWithValue, getFillIndex } from '@utils';
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
  const [splitedEventMap, setSplitedEventMap] = useState<Map<string, (EventModel | undefined)[]>>(new Map());
  const [maxEventCount, setMaxEventCount] = useState(maxEvents ?? 0);
  const rowRef = useRef<HTMLDivElement>(null);
  const startOfMonth = DateTime.fromObject({ month }) as DateTime<true>;
  const startOfMonthView =
    startOfMonth.weekday === firstDay ? startOfMonth : startOfMonth.set({ weekday: firstDay }).minus({ weeks: 1 });
  const daysOfMonthView = Array.from({ length: 42 }, (_, i) => startOfMonthView.plus({ days: i }));

  const groupByWeek = (events: EventModel[]) => {
    return Array.from({ length: 6 }).map((_, index) => {
      const startOfWeek = startOfMonthView.plus({ days: index * 7 });
      const endOfWeek = startOfWeek.plus({ days: 6 });
      const sameWeekEvents = filterByDateRange(events, startOfWeek, endOfWeek);
      return order ? sameWeekEvents.sort(compareOrder(0, order)) : sameWeekEvents;
    });
  };

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
    const filteredByMonthView = filterByDateRange(
      monthlyEvents,
      daysOfMonthView[0],
      daysOfMonthView[daysOfMonthView.length - 1],
    );
    const sortedByDate = sortByDate(filteredByMonthView);
    const eventsByWeek = groupByWeek(sortedByDate);

    const groupedMapByDate = new Map<string, (EventModel | undefined)[]>();
    eventsByWeek.forEach((events, weekIndex) => {
      events.forEach(event => {
        const days = Interval.fromDateTimes(event.startDate, event.endDate).count('days');
        if (days < 2) {
          // handle single day event
          const start = event.startDate.toISODate()!;
          const arr = groupedMapByDate.get(start) ?? [];
          groupedMapByDate.set(start, fillStartWithValue(arr, event));
          return;
        }

        const start = DateTime.max(event.startDate, startOfMonthView.plus({ days: weekIndex * 7 }));
        const end = DateTime.min(event.endDate, startOfMonthView.plus({ days: weekIndex * 7 + 6 }).endOf('day'));
        const daysArr = Array.from({ length: Interval.fromDateTimes(start, end).count('days') });

        const maxIndex = daysArr.reduce<number>((acc, _, index) => {
          const date = start.plus({ days: index }).toISODate()!;
          const arr = groupedMapByDate.get(date) ?? [];
          return Math.max(acc, getFillIndex(arr));
        }, 0);

        daysArr.forEach((_, index) => {
          const date = start.plus({ days: index }).toISODate()!;
          const arr = [...(groupedMapByDate.get(date) ?? [])];
          arr[maxIndex] = event;
          groupedMapByDate.set(date, arr);
        });
      });
    });
    setSplitedEventMap(groupedMapByDate);
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
