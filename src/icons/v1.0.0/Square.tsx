import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Square = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 38 38" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <rect width="38" height="38" rx="5" />
  </IconWrapper>
);