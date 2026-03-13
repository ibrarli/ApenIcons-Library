import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Triangle = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 29 26" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M11.6647 1.5C12.8194 -0.499997 15.7062 -0.5 16.8609 1.5L28.1192 21C29.2739 23 27.8305 25.5 25.5211 25.5H3.00448C0.695074 25.5 -0.748305 23 0.406395 21L11.6647 1.5Z" />
  </IconWrapper>
);