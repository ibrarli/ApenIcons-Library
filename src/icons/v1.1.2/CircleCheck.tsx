import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleCheck = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The inner checkmark path */}
    <path 
      d="M7 11L9.35426 13.3543C9.71998 13.72 10.3042 13.7465 10.7016 13.4154L16 9" 
    />
  </IconWrapper>
);