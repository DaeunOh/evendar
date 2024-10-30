import { DateTime } from 'luxon';
import { DayCellProps } from '@constants/interfaces';
import * as S from './DayCellHeader.style';

const DayCellHeader = ({ month, date }: Pick<DayCellProps, 'month' | 'date'>) => {
  return (
    <S.DayCellHeaderWrapper $isToday={date.hasSame(DateTime.now(), 'day')}>
      <S.DateText $isHoliday={date.weekday === 7} $isSameMonth={date.month === month}>
        {date.day}
      </S.DateText>
    </S.DayCellHeaderWrapper>
  );
};

export default DayCellHeader;
