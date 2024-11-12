import { useDoubleClick } from '@hooks';
import { DayCellProps } from '@constants/interfaces';
import EventBar from './EventBar';
import * as S from './DayCellContent.style';

const DayCellContent = ({
  date,
  events,
  onEventClick,
  onEventDblClick,
  index,
  eventHeight,
  maxEvents,
}: Omit<DayCellProps, 'month' | 'onDateClick' | 'onDateDblClick'>) => {
  const { onClick, onDoubleClick } = useDoubleClick({ onClick: onEventClick, onDoubleClick: onEventDblClick });

  return (
    <S.DayCellContentContainer>
      {events
        .slice(0, maxEvents)
        .map((event, eventIndex) =>
          event && (event.startDate.hasSame(date, 'day') || index === 0) ? (
            <EventBar
              key={`${date.toISODate()}-${eventIndex}`}
              date={date}
              dateIndex={index}
              event={event}
              onClick={onClick}
              onDoubleClick={onDoubleClick}
              index={eventIndex}
              eventHeight={eventHeight}
            />
          ) : null,
        )}
    </S.DayCellContentContainer>
  );
};
export default DayCellContent;
