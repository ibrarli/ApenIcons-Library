import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home2Check = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 23" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Structure (Roof and Left/Top Wall) */}
    <path 
      d="M1 21.05V11.45C1 11.1932 1.09877 10.9463 1.27586 10.7603L10.2759 1.31033C10.67 0.89654 11.33 0.896539 11.7241 1.31033L20.7241 10.7603C20.9012 10.9463 21 11.1932 21 11.45V13.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Doorway */}
    <path 
      d="M8 21.05V15.05C8 14.4977 8.44772 14.05 9 14.05H13C13.5523 14.05 14 14.4977 14 15.05V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Success Checkmark Indicator */}
    <path 
      d="M17 20.05L17.2678 20.4516C17.6353 21.003 18.4278 21.0509 18.8591 20.5477L21 18.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);