import { MouseEvent } from 'react';
import { Interval } from 'luxon';
import { DayCellProps, EventInput } from '@constants/interfaces';
import * as S from './EventBar.style';

interface Props extends Pick<DayCellProps, 'date' | 'index'> {
  event: EventInput;
  onClick?: (jsEvent: MouseEvent) => void;
  onDoubleClick?: (jsEvent: MouseEvent) => void;
  dateIndex: number;
}

const EventBar = ({ date, dateIndex, index, event, onClick, onDoubleClick }: Props) => {
  const days = Math.min(Interval.fromISO([date.toISO(), event.end].join('/')).count('days'), 7 - dateIndex);

  return (
    <S.EventBarWrapper
      $days={days}
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
