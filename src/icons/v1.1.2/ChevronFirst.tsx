import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ChevronFirst = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 9 13">
    {/* The vertical start-bar */}
    <path d="M1 2.02942L1 9.02942" />
    
    {/* The left-pointing chevron tip */}
    <path d="M7.97056 11.0589L2.94113 6.02942L7.97056 0.999981" />
  </IconWrapper>
);