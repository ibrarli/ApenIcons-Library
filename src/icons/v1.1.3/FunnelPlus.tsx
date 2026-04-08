import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const FunnelPlus = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 19" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Funnel Body */}
    <path d="M21 1H1L9 8V18L13 16V8L21 1Z" />
    
    {/* Plus Indicator - Vertical Line */}
    <path d="M19 13V17" />
    
    {/* Plus Indicator - Horizontal Line */}
    <path d="M17 15L21 15" />
  </IconWrapper>
);