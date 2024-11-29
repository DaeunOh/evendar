import { DateTime } from 'luxon';
import Title from './Title';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import TodayButton from './TodayButton';
import ViewSelect from './ViewSelect';
import * as S from './HeaderToolbar.style';
import { ViewMode } from '@constants/interfaces';

interface Props {
  onViewModeChange?: (mode: ViewMode) => void;
}

const HeaderToolbar = ({ onViewModeChange }: Props) => {
  const handleViewModeChange = (mode: ViewMode) => {
    onViewModeChange?.(mode);
  };

  return (
    <S.HeaderToolbarContainer className="evd-header-toolbar">
      <S.LeftSideWrapper>
        <Title date={DateTime.now()} />
        <PrevButton />
        <NextButton />
        <TodayButton />
      </S.LeftSideWrapper>
      <S.RightSideWrapper>
        <ViewSelect
          defaultValue="month"
          onChange={handleViewModeChange}
          items={[
            { label: 'Month', value: 'month' },
            { label: 'Week', value: 'week' },
          ]}
        />
      </S.RightSideWrapper>
    </S.HeaderToolbarContainer>
  );
};

export default HeaderToolbar;
