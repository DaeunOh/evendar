import { MouseEvent } from 'react';
import { DateTime, MonthNumbers, WeekdayNumbers } from 'luxon';
import { EventModel } from '@models';

export type ViewMode = 'month' | 'week' | 'day';

export type DateLike = string | Date;

export interface EventInput {
  title: string;
  start: DateLike;
  end: DateLike;
  allDay?: boolean;
  color?: string;
  [key: string]: unknown;
}

export interface MoreButtonParams {
  date: Date;
  jsEvent: MouseEvent;
}

export interface CalendarProps {
  initialDate?: DateTime;
  month?: MonthNumbers;
  duration?: DurationObject;
  events: EventModel[];
  onDateClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onDateDblClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onEventClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onEventDblClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  width?: string | number;
  height?: string | number;
  firstDay?: WeekdayNumbers;
  order?: string[];
  eventHeight?: number;
  maxEvents?: number;
  moreButtonContent?: (num: number) => string | JSX.Element;
  onMoreButtonClick?: (params: MoreButtonParams) => void;
}

export interface HeaderProps {
  initialDate?: DateTime;
  firstDay?: WeekdayNumbers;
  viewMode?: ViewMode;
  duration?: DurationObject;
}

export interface DayCellProps extends Omit<CalendarProps, 'events' | 'width' | 'height' | 'firstDay' | 'order'> {
  events: (EventModel | undefined)[];
  date: DateTime;
  index: number;
  eventHeight: number;
  maxEvents: number;
}

export interface ToolbarTitleProps {
  date: DateTime;
}

export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export interface ViewSelectProps<T> {
  defaultValue: T;
  items: { label: string; value: T }[];
  onChange?: (cur: T) => unknown;
}

export interface DurationObject {
  years?: number;
  year?: number;
  months?: number;
  month?: number;
  weeks?: number;
  week?: number;
  days?: number;
  day?: number;
  hours?: number;
  hour?: number;
  minutes?: number;
  minute?: number;
  seconds?: number;
  second?: number;
  milliseconds?: number;
  millisecond?: number;
  ms?: number;
}
