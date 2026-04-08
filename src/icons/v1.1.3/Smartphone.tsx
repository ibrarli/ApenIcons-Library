import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Smartphone = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 14 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Device Frame */}
    <rect 
      x="1" 
      y="1" 
      width="12" 
      height="20" 
      rx="1" 
      strokeWidth={props.strokeWidth || 2}
    />
    
    {/* Speaker / Notch Detail */}
    <path 
      d="M6 4H8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={props.strokeWidth || 2}
    />
  </IconWrapper>
);