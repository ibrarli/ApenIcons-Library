import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const HeartFill = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 19" 
    fill={props.color || 'currentColor'}
    stroke="none"
  >
    {/* Solid Heart Geometry */}
    <path 
      d="M12.3307 1.68763C14.5411 -0.562545 18.1251 -0.562545 20.3356 1.68763C22.5456 3.93778 22.5457 7.586 20.3356 9.83607L11.6969 18.629C11.5761 18.752 11.432 18.8367 11.2789 18.8829C11.2175 18.9015 11.1547 18.9139 11.0914 18.9201C11.0281 18.9262 10.9643 18.9262 10.901 18.9201C10.838 18.9139 10.7756 18.9014 10.7145 18.8829C10.5611 18.8368 10.4165 18.7522 10.2955 18.629L1.65782 9.83607C-0.552607 7.58589 -0.552607 3.93781 1.65782 1.68763C3.86821 -0.562476 7.4513 -0.562415 9.66173 1.68763L10.9957 3.04603L12.3307 1.68763Z" 
    />
  </IconWrapper>
);