import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const MenuKebab = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 2 10">
    {/* Top Dot */}
    <circle cx="1" cy="1" r="1" fill={props.color || 'currentColor'} stroke="none" />
    
    {/* Middle Dot */}
    <circle cx="1" cy="5" r="1" fill={props.color || 'currentColor'} stroke="none" />
    
    {/* Bottom Dot */}
    <circle cx="1" cy="9" r="1" fill={props.color || 'currentColor'} stroke="none" />
  </IconWrapper>
);