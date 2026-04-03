import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Square = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 22">
    {/* Main square frame with slightly rounded corners */}
    <rect 
      x="1" 
      y="1" 
      width="20" 
      height="20" 
      rx="2" 
    />
  </IconWrapper>
);