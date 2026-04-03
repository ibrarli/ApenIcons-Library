import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleArrowLeft = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The left-pointing arrow head */}
    <path d="M11.0442 15.0883L7.00003 11.0441L11.0442 6.99998" />
    
    {/* The horizontal arrow shaft */}
    <path d="M15.0589 11L7.0589 11" />
  </IconWrapper>
);