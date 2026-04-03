import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CirclePlus = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* Vertical stroke */}
    <path d="M11 6V16" />
    
    {/* Horizontal stroke */}
    <path d="M16 11L6 11" />
  </IconWrapper>
);