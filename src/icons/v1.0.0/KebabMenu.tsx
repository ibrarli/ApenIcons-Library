import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const KebabMenu = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 9 33" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M4.5 24C6.98528 24 9 26.0147 9 28.5C9 30.9853 6.98528 33 4.5 33C2.01472 33 0 30.9853 0 28.5C0 26.0147 2.01472 24 4.5 24ZM4.5 12C6.98528 12 9 14.0147 9 16.5C9 18.9853 6.98528 21 4.5 21C2.01472 21 0 18.9853 0 16.5C0 14.0147 2.01472 12 4.5 12ZM4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0Z" />
  </IconWrapper>
);