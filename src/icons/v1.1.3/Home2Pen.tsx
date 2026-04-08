import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home2Pen = (props: IconProps) => (
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
    
    {/* Doorway (Left-aligned for Pen clearance) */}
    <path 
      d="M14 16.05V15.05C14 14.4977 13.5523 14.05 13 14.05H9C8.44772 14.05 8 14.4977 8 15.05V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Pen / Edit Indicator */}
    <path 
      d="M13.6367 20.8309L14.2813 18.9885L19.7267 15.8446L21 18.05L15.5546 21.1939L13.6367 20.8309Z" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);