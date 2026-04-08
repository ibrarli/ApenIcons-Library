import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const FunnelX = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 19" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Funnel Body */}
    <path d="M21 1H1L9 8V18L13 16V8L21 1Z" />
    
    {/* X Indicator - Diagonal 1 */}
    <path d="M21 14L17 18" />
    
    {/* X Indicator - Diagonal 2 */}
    <path d="M21 18L17 14" />
  </IconWrapper>
);