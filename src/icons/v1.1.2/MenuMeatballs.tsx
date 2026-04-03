import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const MenuMeatballs = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 10 2">
    {/* Left Dot */}
    <circle cx="1" cy="1" r="1" fill={props.color || 'currentColor'} stroke="none" />
    
    {/* Middle Dot */}
    <circle cx="5" cy="1" r="1" fill={props.color || 'currentColor'} stroke="none" />
    
    {/* Right Dot */}
    <circle cx="9" cy="1" r="1" fill={props.color || 'currentColor'} stroke="none" />
  </IconWrapper>
);