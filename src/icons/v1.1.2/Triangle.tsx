import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Triangle = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 24 22">
    {/* The main triangular path */}
    <path 
      d="M11.134 1.5C11.5189 0.833334 12.4811 0.833333 12.866 1.5L21.5263 16.5C21.9112 17.1667 21.4301 18 20.6603 18H3.33975C2.56995 18 2.08882 17.1667 2.47372 16.5L11.134 1.5Z" 
    />
  </IconWrapper>
);