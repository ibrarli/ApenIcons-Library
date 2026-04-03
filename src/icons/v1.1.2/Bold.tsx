import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Bold = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Matches the 15x22 tall aspect ratio */
    viewBox="0 0 15 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
    /* 2. Consistent stroke weight and rounded joins */
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* 3. The vertical stem of the 'B' */}
    <path d="M1 1V21" />
    
    {/* 4. The top curve (r=4) */}
    <path d="M1 1H7C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9H1" />
    
    {/* 5. The bottom curve (r=6) */}
    <path d="M1 9H8C11.3137 9 14 11.6863 14 15C14 18.3137 11.3137 21 8 21H1" />
  </IconWrapper>
);