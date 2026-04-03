import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const UserMinus = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 20 22">
    {/* The shoulder/base arc */}
    <path 
      d="M14.8099 13.3917C13.4186 12.5103 11.7689 12 10 12C5.02944 12 1 16.0294 1 21" 
      strokeLinecap="round" 
    />
    
    {/* The head silhouette */}
    <circle cx="10" cy="5" r="4" />
    
    {/* The 'Minus' sign badge */}
    <path d="M19 17.5H14" />
  </IconWrapper>
);