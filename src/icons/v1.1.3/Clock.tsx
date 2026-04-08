import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Clock = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Outer Clock Circle */}
    <circle cx="11" cy="11" r="10" />
    
    {/* Clock Hands: 12 to 6 position and angled minute hand */}
    <path 
      d="M11 5V11L14 14" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);