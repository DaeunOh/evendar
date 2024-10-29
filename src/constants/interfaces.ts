import { DateTime, MonthNumbers, WeekdayNumbers } from 'luxon';

export type ViewMode = 'month' | 'week' | 'day';

export interface CalendarProps {
  month?: MonthNumbers;
  width?: string | number;
  height?: string | number;
  firstDay?: WeekdayNumbers;
}

export interface HeaderProps {
  firstDay?: WeekdayNumbers;
}

export interface DayCellProps {
  month: MonthNumbers;
  date: DateTime;
}
