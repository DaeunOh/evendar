import { DayCellProps } from '@constants/interfaces';
import DayCellHeader from './DayCellHeader';
import * as S from './DayCell.style';

const DayCell = ({ month, date }: DayCellProps) => {
  return (
    <S.DayCellContainer className="evd-day-cell">
      <DayCellHeader month={month} date={date} />
    </S.DayCellContainer>
  );
};

export default DayCell;
