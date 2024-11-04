import { DateTime } from 'luxon';
import Title from './Title';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import TodayButton from './TodayButton';
import ViewSelect from './ViewSelect';
import * as S from './HeaderToolbar.style';

const HeaderToolbar = () => {
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
          defaultValue="Month"
          items={[
            { label: 'Month', value: 'Month' },
            { label: 'Week', value: 'Week' },
          ]}
        />
      </S.RightSideWrapper>
    </S.HeaderToolbarContainer>
  );
};

export default HeaderToolbar;
