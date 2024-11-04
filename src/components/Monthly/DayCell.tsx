import React from 'react';
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
  moreButton,
}: DayCellProps) => {
  const { onClick, onDoubleClick } = useDoubleClick({ onClick: onDateClick, onDoubleClick: onDateDblClick });
  const moreButtonNum = events.length - maxEvents;
  const moreButtonContent = moreButton?.(moreButtonNum);

  const MoreButton = () => {
    const className = 'evd-more-button';
    if (!moreButtonContent) return <S.MoreButton className={className}>{`+ ${moreButtonNum}`}</S.MoreButton>;
    return typeof moreButtonContent === 'string' ? (
      <S.MoreButton className={className}>{moreButtonContent}</S.MoreButton>
    ) : (
      React.cloneElement(moreButtonContent, { className })
    );
  };

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
      {moreButtonNum > 0 && <MoreButton />}
    </S.DayCellContainer>
  );
};

export default DayCell;
