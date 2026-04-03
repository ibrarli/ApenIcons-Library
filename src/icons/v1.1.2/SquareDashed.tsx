import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const SquareDashed = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* Main square frame with dashed border */}
    <rect 
      x="1" 
      y="1" 
      width="20" 
      height="20" 
      rx="2" 
      strokeDasharray="5 4"
    />
  </IconWrapper>
);