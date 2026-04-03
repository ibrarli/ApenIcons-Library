import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const File = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 17 22">
    {/* The main document outline with the dog-ear notch */}
    <path 
      d="M1 20V2C1 1.44772 1.44772 1 2 1H8.54623C8.83459 1 9.10892 1.12448 9.29881 1.34149L15.7526 8.71723C15.9121 8.89952 16 9.13351 16 9.37574V20C16 20.5523 15.5523 21 15 21H2C1.44772 21 1 20.5523 1 20Z" 
    />
    
    {/* The inner fold for the dog-ear corner */}
    <path 
      d="M9 2V8C9 8.55228 9.44772 9 10 9H15" 
    />
  </IconWrapper>
);