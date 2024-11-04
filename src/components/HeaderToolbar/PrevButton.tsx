import { ArrowBack } from '@assets/icons/ArrowBack';
import * as S from './PrevButton.style';

const PrevButton = () => {
  return (
    <S.PrevButtonWrapper className="evd-toolbar-prev-button">
      <ArrowBack />
    </S.PrevButtonWrapper>
  );
};

export default PrevButton;
