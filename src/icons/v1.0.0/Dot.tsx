import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Dot = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 28 28" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <circle cx="14" cy="14" r="14" />
  </IconWrapper>
);