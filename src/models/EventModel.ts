import { DateTime } from 'luxon';
import { EventInput } from '@constants/interfaces';
import { parseDate } from '@utils';

export class EventModel {
  private _data: EventInput;

  constructor(data: EventInput) {
    this._data = data;
  }

  get startDate(): DateTime {
    return parseDate(this._data.start);
  }

  get endDate(): DateTime {
    return parseDate(this._data.end);
  }

  get title(): string {
    return this._data.title;
  }

  get allDay(): boolean {
    return this._data.allDay ?? false;
  }

  get color(): string {
    return this._data.color ?? '#B5D692'; // theme.color.system.primary
  }

  getData(key: string) {
    return this._data[key];
  }
}
