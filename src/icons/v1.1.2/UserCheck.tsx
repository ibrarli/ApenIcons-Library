import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const UserCheck = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 21 22">
    {/* The shoulder/base arc */}
    <path 
      d="M15.6573 14C14.1116 12.7492 12.1433 12 10 12C5.02944 12 1 16.0294 1 21" 
      strokeLinecap="round" 
    />
    
    {/* The head silhouette */}
    <circle cx="10" cy="5" r="4" />
    
    {/* The validation checkmark */}
    <path 
      d="M14 17.3333L15.3543 18.6876C15.72 19.0533 16.3042 19.0798 16.7016 18.7487L20 16" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);