import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ShieldPen = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 18 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Open Shield Geometry (Trimmed for the Pen) */}
    <path 
      d="M8 21L3.09381 17.4956C1.77983 16.557 1 15.0417 1 13.4269L1 3.10526L8 1L15 3.10526V11.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Pen / Edit Indicator */}
    <path 
      d="M9.63666 18.9864L10.2813 17.1439L15.7267 14L17 16.2055L11.5546 19.3494L9.63666 18.9864Z" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);