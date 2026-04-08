import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const VideoCamera = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 14" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Camera Body (Refactored from rotate for cleaner scaling) */}
    <rect 
      x="1" 
      y="1" 
      width="14" 
      height="12" 
      rx="1" 
      strokeWidth={props.strokeWidth || 2}
    />
    
    {/* Camera Lens / Shutter */}
    <path 
      d="M15 7.00001L21 2L21 12L15 7.00001Z" 
      strokeLinejoin="round" 
      strokeWidth={props.strokeWidth || 2}
    />
  </IconWrapper>
);