import { useDoubleClick } from '@hooks';
import { DayCellProps } from '@constants/interfaces';
import DayCellHeader from './DayCellHeader';
import DayCellContent from './DayCellContent';
import * as S from './DayCell.style';

const DayCell = ({
  month,
  date,
  events,
  onDateClick,
  onDateDblClick,
  onEventClick,
  onEventDblClick,
  index,
  eventHeight,
  maxEvents,
}: DayCellProps) => {
  const { onClick, onDoubleClick } = useDoubleClick({ onClick: onDateClick, onDoubleClick: onDateDblClick });

  return (
    <S.DayCellContainer
      className="evd-day-cell"
      {...(onDateClick && { onClick })}
      {...(onDateDblClick && { onDoubleClick })}
    >
      <DayCellHeader month={month} date={date} />
      <DayCellContent
        date={date}
        events={events}
        index={index}
        onEventClick={onEventClick}
        onEventDblClick={onEventDblClick}
        eventHeight={eventHeight}
        maxEvents={maxEvents}
      />
    </S.DayCellContainer>
  );
};

export default DayCell;
