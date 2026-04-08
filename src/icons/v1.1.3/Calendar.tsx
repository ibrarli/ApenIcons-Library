import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Calendar = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 20 20" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Main Calendar Body */}
    <path d="M1 4.0929V18C1 18.5523 1.44772 19 2 19H18C18.5523 19 19 18.5523 19 18V4.0929" />
    
    {/* Header Section */}
    <path d="M19 6.08048V3.10526C19 2.55297 18.5523 2.10526 18 2.10526H2C1.44772 2.10526 1 2.55297 1 3.10526V6.08048" />
    
    {/* Horizontal Separator */}
    <path d="M1 7H19" />
    
    {/* Vertical Ring/Binder Tabs */}
    <path d="M5 1V4" />
    <path d="M15 1V4" />
    
    {/* Interior Date Lines */}
    <path d="M15 11H5" />
    <path d="M15 15H5" />
  </IconWrapper>
);