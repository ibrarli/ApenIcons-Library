import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const UserX = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 20 22">
    {/* The shoulder/base arc */}
    <path 
      d="M14 12.9355C12.795 12.3367 11.4368 12 10 12C5.02944 12 1 16.0294 1 21" 
      strokeLinecap="round" 
    />
    
    {/* The head silhouette */}
    <circle cx="10" cy="5" r="4" />
    
    {/* The 'X' badge */}
    <path d="M18.2678 15.7322L14.7322 19.2678" />
    <path d="M18.2678 19.2678L14.7322 15.7322" />
  </IconWrapper>
);