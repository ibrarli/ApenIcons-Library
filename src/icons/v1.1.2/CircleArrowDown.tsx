import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleArrowDown = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The arrow head (chevron-style) */}
    <path d="M15.0883 11.0441L11.0441 15.0883L6.99998 11.0441" />
    
    {/* The arrow vertical stem */}
    <path d="M11 7.02942V15.0294" />
  </IconWrapper>
);