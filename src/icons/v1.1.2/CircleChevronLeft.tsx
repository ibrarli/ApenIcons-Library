import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleChevronLeft = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The outer circle container */}
    <circle cx="11" cy="11" r="10" />
    
    {/* The left-pointing chevron */}
    <path 
      d="M12.0442 15.0736L8 11.0294L12.0442 6.98527" 
    />
  </IconWrapper>
);