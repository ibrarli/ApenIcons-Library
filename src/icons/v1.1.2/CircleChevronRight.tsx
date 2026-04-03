import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleChevronRight = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The right-pointing chevron */}
    <path 
      d="M9.95581 6.92642L14 10.9706L9.95581 15.0147" 
    />
  </IconWrapper>
);