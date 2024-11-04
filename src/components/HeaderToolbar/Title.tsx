import { ToolbarTitleProps } from '@constants/interfaces';
import * as S from './Title.style';

const Title = ({ date }: ToolbarTitleProps) => {
  return <S.ToolbarTitleWrapper className="evd-toolbar-title">{date.toFormat('yyyy.LL')}</S.ToolbarTitleWrapper>;
};

export default Title;
