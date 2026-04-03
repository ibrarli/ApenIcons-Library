import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const UserPen = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* The shoulder/base arc */}
    <path 
      d="M14 12.9355C12.795 12.3367 11.4368 12 10 12C5.02944 12 1 16.0294 1 21" 
      strokeLinecap="round" 
    />
    
    {/* The head silhouette */}
    <circle cx="10" cy="5" r="4" />
    
    {/* The 'Pen' edit badge */}
    <path 
      d="M11.75 19.799L12.4846 17.6429L18.7942 14L20.2942 16.5981L13.9846 20.2409L11.75 19.799Z" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);