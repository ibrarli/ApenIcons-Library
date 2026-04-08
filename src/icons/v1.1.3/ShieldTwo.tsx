import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ShieldTwo = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 16 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Shield Boundary */}
    <path 
      d="M1 3.10526L8 1L15 3.10526V13.4269C15 15.0417 14.2202 16.557 12.9062 17.4956L8 21L3.09381 17.4956C1.77983 16.557 1 15.0417 1 13.4269L1 3.10526Z" 
      strokeLinejoin="round" 
    />
    
    {/* Internal Numeral '2' */}
    <path 
      d="M7 8H8.75C9.44036 8 10 8.55964 10 9.25C10 9.94036 9.44036 10.5 8.75 10.5H8.5C7.67157 10.5 7 11.1716 7 12V13H10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);