import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const User2 = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 20 22">
    {/* The shoulder/base arc */}
    <path 
      d="M19 21C19 16.0294 14.9706 12 10 12C5.02944 12 1 16.0294 1 21" 
      strokeLinecap="round" 
    />
    
    {/* The head silhouette */}
    <circle cx="10" cy="5" r="4" />
  </IconWrapper>
);