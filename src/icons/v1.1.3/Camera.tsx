import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Camera = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 16" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Optimized Camera Body */}
    <path 
      d="M7 1H15C16.1046 1 17 1.89543 17 3H20C21.1046 3 22 3.89543 22 5V14C22 15.1046 21.1046 16 20 16H2C0.89543 16 0 15.1046 0 14V5C0 3.89543 0.89543 3 2 3H5C5 1.89543 5.89543 1 7 1Z" 
      strokeWidth={props.strokeWidth || 2}
      strokeLinejoin="round" 
    />
    
    {/* Camera Lens */}
    <circle 
      cx="11" 
      cy="9" 
      r="3" 
      strokeWidth={props.strokeWidth || 2}
    />
  </IconWrapper>
);