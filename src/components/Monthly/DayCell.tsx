import { useDoubleClick } from '@hooks';
import { DayCellProps } from '@constants/interfaces';
import DayCellHeader from './DayCellHeader';
import DayCellContent from './DayCellContent';
import { MoreButton } from '@components/MoreButton';
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
  moreButtonContent,
  onMoreButtonClick,
}: DayCellProps) => {
  const { onClick, onDoubleClick } = useDoubleClick({ onClick: onDateClick, onDoubleClick: onDateDblClick });
  const moreButtonNum = events.length - maxEvents;

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
      {moreButtonNum > 0 && (
        <MoreButton
          date={date}
          events={events}
          moreButtonContent={moreButtonContent}
          onClick={onMoreButtonClick}
          num={moreButtonNum}
        />
      )}
    </S.DayCellContainer>
  );
};

export default DayCell;
