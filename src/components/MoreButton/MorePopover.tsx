import { Popover } from '@mui/material';
import { DayCellProps } from '@constants/interfaces';
import * as S from './MorePopover.style';

interface Props extends Pick<DayCellProps, 'date' | 'events'> {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const MorePopover = ({ open, anchorEl, onClose, date, events }: Props) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      sx={{
        '.MuiPopover-paper': {
          width: '280px',
          marginTop: '6px',
          borderRadius: '12px',
          boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <S.PopoverHeader>{date.toFormat('LL/dd (cccc)')}</S.PopoverHeader>
      <S.PopoverContent>
        {events.map(event => (
          <S.EventBar $color={event.color}>{event.title}</S.EventBar>
        ))}
      </S.PopoverContent>
    </Popover>
  );
};

export default MorePopover;
