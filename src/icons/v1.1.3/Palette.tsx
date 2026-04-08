import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Palette = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 22" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Palette Body with Thumb Hole Cutout */}
    <path 
      d="M21 11C21 19.0067 5.47235 11.4857 9.93848 19.3616C10.3397 20.0692 9.86656 20.9698 9.06833 20.8136C4.46985 19.9136 1 15.862 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" 
      strokeLinejoin="round" 
    />
    
    {/* Color Pigment Dots (Path-based for consistent weight) */}
    <path d="M12.5 6.51V6.5" strokeLinecap="round" strokeWidth={Number(props.strokeWidth || 2) * 1.1} />
    <path d="M16.5 10.51V10.5" strokeLinecap="round" strokeWidth={Number(props.strokeWidth || 2) * 1.1} />
    <path d="M7.5 7.51V7.5" strokeLinecap="round" strokeWidth={Number(props.strokeWidth || 2) * 1.1} />
    <path d="M5.5 12.51V12.5" strokeLinecap="round" strokeWidth={Number(props.strokeWidth || 2) * 1.1} />
  </IconWrapper>
);