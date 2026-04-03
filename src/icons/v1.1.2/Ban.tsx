import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Ban = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}

  >
    {/* 3. The outer circle (r=10 gives it a slight 1px padding from the 22px edge) */}
    <circle cx="11" cy="11" r="10" />
    
    {/* 4. The diagonal strike-through line */}
    <path d="M4 4L18 18" />
  </IconWrapper>
);