import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ChevronLast = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 13 13">
    {/* The vertical end-bar */}
    <path d="M12 9.02942V2.02942" />
    
    {/* The chevron tip */}
    <path d="M5.02944 0.999982L10.0589 6.02942L5.02944 11.0589" />
  </IconWrapper>
);