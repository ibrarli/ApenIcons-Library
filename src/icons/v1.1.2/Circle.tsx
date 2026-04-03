import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Circle = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="10" />
  </IconWrapper>
);