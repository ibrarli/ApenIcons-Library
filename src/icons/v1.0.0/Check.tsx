import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Check = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 31 23" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M25.8743 0.883047C27.0434 -0.290922 28.9434 -0.29483 30.1174 0.874258C31.2914 2.04337 31.2953 3.94341 30.1262 5.11742L14.3274 20.9827C11.9823 23.3375 8.16963 23.3374 5.82446 20.9827L0.874269 16.012C-0.294799 14.8379 -0.29096 12.9379 0.883059 11.7688C2.05709 10.5997 3.95713 10.6045 5.12622 11.7786L10.0754 16.7483L25.8743 0.883047Z" />
  </IconWrapper>
);