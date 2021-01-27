import * as S from './styles';
import { TooltipProps } from './types';

const Tooltip = ({ title, children, className }: TooltipProps) => {
  return (
    <S.Container className={className}>
      <S.ErrorIcon size={20} />
      {children}
      <span>{title}</span>
    </S.Container>
  );
};

export default Tooltip;
