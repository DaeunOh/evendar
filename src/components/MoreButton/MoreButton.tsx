import React, { MouseEvent } from 'react';
import { DayCellProps, MoreButtonParams } from '@constants/interfaces';
import MorePopover from './MorePopover';
import * as S from './MoreButton.style';

interface Props extends Pick<DayCellProps, 'date' | 'events' | 'moreButtonContent'> {
  num: number;
  onClick?: (params: MoreButtonParams) => void;
}

const MoreButton = ({ date, events, moreButtonContent, num, onClick }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const className = 'evd-more-button';
  const content = moreButtonContent?.(num) ?? `+ ${num}`;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!onClick) {
      setAnchorEl(e.currentTarget);
      return;
    }

    const params: MoreButtonParams = {
      date: date.toJSDate(),
      jsEvent: e,
    };
    onClick(params);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {typeof content === 'string' ? (
        <S.MoreButton onClick={handleClick} className={className}>
          {content}
        </S.MoreButton>
      ) : (
        React.cloneElement(content, { className })
      )}
      <MorePopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        date={date}
        events={events}
      />
    </>
  );
};

export default MoreButton;
