import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const SparkleFill = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 18 18" 
    fill={props.color || 'currentColor'}
    stroke="none"
  >
    {/* Solid Sparkle/Star Geometry */}
    <path 
      d="M9 0C10.5452 4.15477 13.8458 7.45507 18 9.00098C13.8459 10.5467 10.5454 13.8475 9 18.002C7.45433 13.8473 4.15454 10.5464 0 9.00098C4.15468 7.45534 7.45451 4.15497 9 0Z" 
    />
  </IconWrapper>
);