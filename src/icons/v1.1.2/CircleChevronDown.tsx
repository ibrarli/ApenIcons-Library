import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleChevronDown = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The downward-pointing chevron */}
    <path 
      d="M15.0736 10.0147L11.0294 14.0589L6.98527 10.0147" 
    />
  </IconWrapper>
);