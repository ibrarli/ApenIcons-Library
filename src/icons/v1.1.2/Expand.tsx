import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Expand = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 20 20">
    {/* Top Left Corner */}
    <path d="M1 8L1 1L8 1" />
    <path d="M2 2L7 7" />
    
    {/* Top Right Corner */}
    <path d="M12 1L19 1L19 8" />
    <path d="M18 2L13 7" />
    
    {/* Bottom Right Corner */}
    <path d="M19 12L19 19L12 19" />
    <path d="M18 18L13 13" />
    
    {/* Bottom Left Corner */}
    <path d="M8 19L1 19L1 12" />
    <path d="M2 18L7 13" />
  </IconWrapper>
);