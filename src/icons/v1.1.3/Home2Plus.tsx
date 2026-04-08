import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home2Plus = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 23" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Full House Structure */}
    <path 
      d="M21 21.05V11.45C21 11.1932 20.9012 10.9463 20.7241 10.7603L11.7241 1.31033C11.33 0.896539 10.67 0.89654 10.2759 1.31033L1.27586 10.7603C1.09877 10.9463 1 11.1932 1 11.45V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Doorway */}
    <path 
      d="M8 21.05V15.05C8 14.4977 8.44772 14.05 9 14.05H13C13.5523 14.05 14 14.4977 14 15.05V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Plus Indicator (Upper Right) */}
    <path 
      d="M18.995 1.04999V5.04999" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M17 3.05499L21 3.05499" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);