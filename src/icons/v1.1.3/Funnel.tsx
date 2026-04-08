import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Funnel = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 19" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Unified Funnel Path */}
    <path 
      d="M21 1H1L9 8V18L13 16V8L21 1Z" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);