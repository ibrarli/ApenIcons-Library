import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Italic = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 13 20">
    {/* Top horizontal bar */}
    <path d="M6 1H12" />
    
    {/* Bottom horizontal bar */}
    <path d="M1 19H7" />
    
    {/* The slanted main stroke */}
    <path d="M4 19L9 1" />
  </IconWrapper>
);