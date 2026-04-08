import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ShieldOne = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 16 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Shield Body */}
    <path 
      d="M1 3.10526L8 1L15 3.10526V13.4269C15 15.0417 14.2202 16.557 12.9062 17.4956L8 21L3.09381 17.4956C1.77983 16.557 1 15.0417 1 13.4269L1 3.10526Z" 
      strokeLinejoin="round" 
    />
    
    {/* Numeric '1' Detail */}
    <path 
      d="M6 9L8 8V13" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);