import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const User = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 20 22">
    {/* The torso/shoulder silhouette with base line */}
    <path 
      d="M9.82361 12C5.53488 12 1.94678 14.9998 1.0431 19.0156C0.8006 20.0932 1.71904 21 2.82361 21H16.8236C17.9282 21 18.8466 20.0932 18.6041 19.0156C17.7004 14.9998 14.1123 12 9.82361 12Z" 
    />
    
    {/* The head silhouette */}
    <circle cx="9.82361" cy="5" r="4" />
  </IconWrapper>
);