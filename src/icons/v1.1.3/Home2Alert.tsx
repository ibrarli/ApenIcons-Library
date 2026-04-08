import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home2Alert =  (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 23" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Structure (Roof and Left/Top Wall) */}
    <path 
      d="M1 21.05V11.45C1 11.1932 1.09877 10.9463 1.27586 10.7603L10.2759 1.31033C10.67 0.89654 11.33 0.896539 11.7241 1.31033L21 11.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Doorway */}
    <path 
      d="M8 21.05V15.05C8 14.4977 8.44772 14.05 9 14.05H13C13.5523 14.05 14 14.4977 14 15.05V21.05" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Alert Indicator - Stem */}
    <path 
      d="M21 14.05L21 18.05" 
      strokeLinecap="round" 
    />

    {/* Alert Indicator - Dot (Path-based for consistent styling) */}
    <path 
      d="M21 21.06V21.05" 
      strokeLinecap="round" 
      strokeWidth={Number(props.strokeWidth || 2) * 1.2} 
    />
  </IconWrapper>
);