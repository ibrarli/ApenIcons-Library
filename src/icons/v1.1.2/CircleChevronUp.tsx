import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleChevronUp = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The upward-pointing chevron */}
    <path 
      d="M6.98527 12.0442L11.0294 8L15.0736 12.0442" 
    />
  </IconWrapper>
);