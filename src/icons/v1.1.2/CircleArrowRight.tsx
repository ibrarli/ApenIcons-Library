import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleArrowRight = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The arrow head pointing right */}
    <path d="M11.0441 7.00004L15.0883 11.0442L11.0441 15.0883" />
    
    {/* The horizontal arrow shaft */}
    <path d="M7.02942 11.0883L15.0294 11.0883" />
  </IconWrapper>
);