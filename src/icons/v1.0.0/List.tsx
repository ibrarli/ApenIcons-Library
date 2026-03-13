import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const List = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 39 30" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <circle cx="3.46666" cy="3.46666" r="3.46666" />
    <rect x="9.53339" width="29.4666" height="6.93332" rx="3.46666" />
    <circle cx="3.46666" cy="14.7333" r="3.46666" />
    <rect x="9.53339" y="11.2667" width="29.4666" height="6.93332" rx="3.46666" />
    <circle cx="3.46666" cy="26" r="3.46666" />
    <rect x="9.53339" y="22.5333" width="29.4666" height="6.93332" rx="3.46666" />
  </IconWrapper>
);