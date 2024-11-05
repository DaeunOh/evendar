import { useState, useRef, useEffect } from 'react';
import { DateTime, Interval } from 'luxon';
import { CalendarProps, EventInput } from '@constants/interfaces';
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
  const [splitedEventMap, setSplitedEventMap] = useState<Map<string, EventInput[]>>(new Map());
  const [maxEventCount, setMaxEventCount] = useState(maxEvents ?? 0);
  const rowRef = useRef<HTMLDivElement>(null);
  const startOfMonth = DateTime.fromObject({ month }) as DateTime<true>;
  const startOfMonthView =
    startOfMonth.weekday === firstDay ? startOfMonth : startOfMonth.set({ weekday: firstDay }).minus({ weeks: 1 });
  const daysOfMonthView = Array.from({ length: 42 }, (_, i) => startOfMonthView.plus({ days: i }));

  const compareDates = (a: EventInput, b: EventInput) => {
    return DateTime.fromISO(a.start).toMillis() - DateTime.fromISO(b.start).toMillis();
  };

  const groupByDate = (events: EventInput[]) => {
    const eventMap = new Map<string, EventInput[]>();
    events.forEach(event => {
      const date = DateTime.fromISO(event.start).toISODate();
      if (!date) return;
      eventMap.set(date, eventMap.has(date) ? [...eventMap.get(date)!, event] : [event]);
    });
    return eventMap;
  };

  const sortByOrder = (eventMap: Map<string, EventInput[]>) => {
    return !order.length
      ? eventMap
      : new Map(Array.from(eventMap.entries()).map(([key, value]) => [key, value.sort(compareOrder(0))]));
  };

  const compareOrder =
    (index: number) =>
    (a: EventInput, b: EventInput): number => {
      const desc = order[index][0] === '-';
      const key = order[index].replace('-', '') as keyof EventInput;
      const av = key === 'start' || key === 'end' ? DateTime.fromISO(a[key]) : a[key];
      const bv = key === 'start' || key === 'end' ? DateTime.fromISO(b[key]) : b[key];
      if (av === bv) return order[index + 1] ? compareOrder(index + 1)(a, b) : 0;
      if (av === undefined) return 1;
      if (bv === undefined) return -1;
      if (av > bv) return desc ? -1 : 1;
      return desc ? 1 : -1;
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
    // TODO: 달력에 보이는 일정만 정렬
    const sortedByDate = monthlyEvents.sort(compareDates);
    const groupedMapByDate = groupByDate(sortedByDate);
    const sortedMapByOrder = sortByOrder(groupedMapByDate);
    Array.from(sortedMapByOrder.values()).forEach(events => {
      events.forEach((event, index) => {
        const days = Interval.fromISO([event.start, event.end].join('/')).count('days');
        if (days < 2) return;
        Array.from({ length: days - 1 }).forEach((_, i) => {
          const start = DateTime.fromISO(event.start)
            .plus({ days: i + 1 })
            .toISODate();
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
