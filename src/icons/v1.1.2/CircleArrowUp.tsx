import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleArrowUp = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The upward-pointing arrow head */}
    <path d="M7.00004 11.0442L11.0442 7.00003L15.0883 11.0442" />
    
    {/* The vertical arrow stem */}
    <path d="M11.0883 15.0589L11.0883 7.0589" />
  </IconWrapper>
);