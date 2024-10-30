import { DateTime, MonthNumbers, WeekdayNumbers } from 'luxon';

export type ViewMode = 'month' | 'week' | 'day';

export interface EventInput {
  title: string;
  start: string;
  end: string;
  allDay?: boolean;
  color?: string;
}

export interface CalendarProps {
  month?: MonthNumbers;
  events: EventInput[];
  width?: string | number;
  height?: string | number;
  firstDay?: WeekdayNumbers;
  order?: (keyof EventInput | `-${keyof EventInput}`)[];
}

export interface HeaderProps {
  firstDay?: WeekdayNumbers;
}

export interface DayCellProps {
  month: MonthNumbers;
  date: DateTime;
}
