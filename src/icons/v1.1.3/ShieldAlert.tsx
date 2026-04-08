import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ShieldAlert = (props: IconProps) => (
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
    
    {/* Exclamation Stem */}
    <path 
      d="M8 7V11" 
      strokeLinecap="round" 
    />
    
    {/* Exclamation Dot (as a path for consistent stroke/fill behavior) */}
    <path 
      d="M8 14.01V14" 
      strokeLinecap="round" 
      strokeWidth={Number(props.strokeWidth || 2) * 1.2} 
    />
  </IconWrapper>
);