import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const MenuHamburger = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 13 10">
    {/* Top bar */}
    <path d="M12 1L1 1" />
    
    {/* Middle bar */}
    <path d="M12 5L1 5" />
    
    {/* Bottom bar */}
    <path d="M12 9L1 9" />
  </IconWrapper>
);