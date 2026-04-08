import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ShieldCheck = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 16 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Protective Shield Geometry */}
    <path 
      d="M1 3.10526L8 1L15 3.10526V13.4269C15 15.0417 14.2202 16.557 12.9062 17.4956L8 21L3.09381 17.4956C1.77983 16.557 1 15.0417 1 13.4269L1 3.10526Z" 
      strokeLinejoin="round" 
    />
    
    {/* Internal Checkmark */}
    <path 
      d="M6 11L6.26777 11.4017C6.63535 11.953 7.42782 12.0009 7.85908 11.4977L10 9" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);