import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home2Two = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 23" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Structure (Roof and Left/Top Wall) */}
    <path 
      d="M1 21.05V11.45C1 11.1932 1.09877 10.9463 1.27586 10.7603L10.2759 1.31033C10.67 0.89654 11.33 0.896539 11.7241 1.31033L20.7241 10.7603C20.9012 10.9463 21 11.45V13.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Doorway */}
    <path 
      d="M8 21.05V15.05C8 14.4977 8.44772 14.05 9 14.05H13C13.5523 14.05 14 14.4977 14 15.05V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Numeral '2' Indicator */}
    <path 
      d="M18 16.05H19.75C20.4404 16.05 21 16.6096 21 17.3C21 17.9903 20.4404 18.55 19.75 18.55H19.5C18.6716 18.55 18 19.2216 18 20.05V21.05H21" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);