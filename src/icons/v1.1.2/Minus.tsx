import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Minus = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 14 12">
    {/* The horizontal minus stroke */}
    <path d="M13 6H1" />
  </IconWrapper>
);