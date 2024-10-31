import { MouseEvent } from 'react';
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
  onDateClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onDateDblClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onEventClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onEventDblClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  width?: string | number;
  height?: string | number;
  firstDay?: WeekdayNumbers;
  order?: (keyof EventInput | `-${keyof EventInput}`)[];
  eventHeight?: number;
  maxEvents?: number;
}

export interface HeaderProps {
  firstDay?: WeekdayNumbers;
}

export interface DayCellProps extends Omit<CalendarProps, 'width' | 'height' | 'firstDay' | 'order'> {
  date: DateTime;
  index: number;
  eventHeight: number;
  maxEvents: number;
}
