import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Heart = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 20" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Optimized Heart Outline */}
    <path 
      d="M11.5034 1.83444C13.9061 -0.61149 17.8097 -0.61149 20.2124 1.83444C22.605 4.2704 22.605 8.21211 20.2125 10.648C18.9985 11.8844 12.4175 18.5837 12.4175 18.5837C12.0798 18.9271 11.6449 19.1253 11.1957 19.1692C11.068 19.1816 10.939 19.1817 10.811 19.1691C10.4271 19.1316 10.0521 18.9814 9.73928 18.7217L9.58931 18.5836L3.00826 11.8834C1.79436 10.648 -0.598203 8.21212 -0.598029 4.27039C-0.598029 1.83444 4.19715 -0.61149 1.79443 1.83444C4.19715 -0.61149 8.1007 -0.61149 10.5034 1.83444L11.0029 2.53522L11.5034 1.83444Z" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);