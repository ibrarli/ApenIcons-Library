import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleAlert = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer container circle */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The exclamation stem */}
    <path d="M11 6V12" />
    
    {/* The exclamation dot - manually filled to match the stroke color */}
    <circle cx="11" cy="15" r="1" fill={props.color || 'currentColor'} stroke="none" />
  </IconWrapper>
);