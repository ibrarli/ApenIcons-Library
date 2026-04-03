import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const SquareX = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* Main square frame */}
    <rect x="1" y="1" width="20" height="20" rx="2" />
    
    {/* Centered X - Backslash stroke */}
    <path d="M7 7L15 15" />
    
    {/* Centered X - Forward slash stroke */}
    <path d="M15 7L7 15" />
  </IconWrapper>
);