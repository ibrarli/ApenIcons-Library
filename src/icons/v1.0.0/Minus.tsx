import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Minus = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 27 7" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <rect width="27" height="6.17143" rx="3.08571" />
  </IconWrapper>
);