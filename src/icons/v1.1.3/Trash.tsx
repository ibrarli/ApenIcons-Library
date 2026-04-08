import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Trash = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 18 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Bin Body */}
    <path d="M3 6V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V6" />
    
    {/* Lid Handle */}
    <path d="M13 3V2C13 1.44772 12.5523 1 12 1H6C5.44772 1 5 1.44772 5 2V3" />
    
    {/* Lid Base Line */}
    <path d="M1 4H17" />
    
    {/* Vertical Detail Lines */}
    <path d="M7 9V17" />
    <path d="M11 9V17" />
  </IconWrapper>
);