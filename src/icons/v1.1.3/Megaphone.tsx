import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Megaphone = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 17 19" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Megaphone Body/Cone */}
    <path 
      d="M5 4.00012C11.8444 4.40012 15 3.00012 16 1.00012V13.0001C14.5 11.0001 8.46296 10.8335 5 11.0001V4.00012Z" 
      strokeLinejoin="round" 
    />
    
    {/* Rear Housing / Grip Area */}
    <rect 
      x="1" 
      y="4.00012" 
      width="4" 
      height="7" 
      strokeLinejoin="round" 
    />
    
    {/* Handle / Stand */}
    <path 
      d="M8 18.0001L4 11.0001H7L11 17.0001L8 18.0001Z" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);