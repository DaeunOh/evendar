import { MouseEvent } from 'react';
import { Interval } from 'luxon';
import { DayCellProps } from '@constants/interfaces';
import { EventModel } from '@models';
import * as S from './EventBar.style';

interface Props extends Pick<DayCellProps, 'date' | 'index' | 'eventHeight'> {
  event: EventModel;
  onClick?: (jsEvent: MouseEvent) => void;
  onDoubleClick?: (jsEvent: MouseEvent) => void;
  dateIndex: number;
}

const EventBar = ({ date, dateIndex, index, event, onClick, onDoubleClick, eventHeight }: Props) => {
  const days = Math.min(Interval.fromDateTimes(date, event.endDate).count('days'), 7 - dateIndex);

  return (
    <S.EventBarWrapper
      className="evd-event-bar"
      $days={days}
      $height={eventHeight}
      $index={index}
      $color={event.color}
      {...(onClick && { onClick })}
      {...(onDoubleClick && { onDoubleClick })}
    >
      <S.EventTitle>{event.title}</S.EventTitle>
    </S.EventBarWrapper>
  );
};
export default EventBar;
