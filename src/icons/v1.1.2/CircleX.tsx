import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleX = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The diagonal X strokes */}
    <path d="M7 7L15 15" />
    <path d="M15 7L7 15" />
  </IconWrapper>
);