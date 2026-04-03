import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Plus = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 14 14">
    {/* Vertical stroke */}
    <path d="M7 1V13" />
    
    {/* Horizontal stroke */}
    <path d="M13 7H1" />
  </IconWrapper>
);