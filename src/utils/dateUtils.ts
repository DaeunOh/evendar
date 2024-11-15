import { DateTime } from 'luxon';
import { DateLike } from '@constants/interfaces';
import { EventModel } from '@models';

export const parseDate = (date: DateLike): DateTime => {
  if (typeof date === 'string') return DateTime.fromISO(date);
  else if (date instanceof Date) return DateTime.fromJSDate(date);
  throw new Error('Invalid date');
};

export const filterByDateRange = (events: EventModel[], start: DateTime, end?: DateTime) => {
  const startOfDay = start.startOf('day');
  const endOfDay = end?.endOf('day') ?? startOfDay.endOf('day');
  return events.filter(event => {
    const eventStart = event.startDate;
    const eventEnd = event.endDate;
    return (
      (eventStart >= startOfDay && eventStart <= endOfDay) ||
      (eventEnd >= startOfDay && eventEnd <= endOfDay) ||
      (eventStart < startOfDay && eventEnd > startOfDay)
    );
  });
};

export const sortByDate = (events: EventModel[]) => {
  return events.sort((a, b) => a.startDate.toMillis() - b.startDate.toMillis());
};

export const compareOrder =
  (index: number, order: string[]) =>
  (a: EventModel, b: EventModel): number => {
    const desc = order[index].startsWith('-');
    const key = order[index].replace('-', '');
    const aValue = getComparableValue(a.getData(key));
    const bValue = getComparableValue(b.getData(key));
    if (isEqualValue(aValue, bValue)) return order[index + 1] ? compareOrder(index + 1, order)(a, b) : 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;
    if (aValue > bValue) return desc ? -1 : 1;
    return desc ? 1 : -1;
  };

const getComparableValue = <T>(value: T): T | DateTime<true> => {
  const date = DateTime.fromISO(`${value}`);
  return date.isValid ? date : value;
};

const isEqualValue = (a: unknown, b: unknown): boolean => {
  if (a instanceof DateTime && b instanceof DateTime) return a.equals(b);
  return a === b;
};
