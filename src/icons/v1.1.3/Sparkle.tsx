import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Sparkle = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 20 20" 
    fill="none" 
    stroke={props.color || 'currentColor'}
  >
    {/* Optimized Sparkle Outline Geometry */}
    <path 
      d="M10 1C11.4577 5.24705 14.5386 8.26396 18.4257 9.67794M18.4257 9.67794C14.5388 11.0917 11.4579 14.1091 10.0175 17.8946M18.4257 9.67794L19.3448 8.86103M10.0175 17.8946C8.57703 14.1089 5.49574 11.0921 1.60822 9.67825M10.0175 17.8946L9.06733 18.9572M1.60822 9.67825C5.49555 8.26428 8.57684 5.247 10.0173 1.46132M1.60822 9.67825L0.658218 8.861L10.0173 1.46132L10.9366 0.644441" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </IconWrapper>
);