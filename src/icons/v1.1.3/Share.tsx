import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Share = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 22" 
    fill={props.color || 'currentColor'}
    stroke="none"
  >
    {/* Optimized Share/Export Geometry */}
    <path 
      d="M21 7.49512L12.5852 0.189112C11.8789 -0.3235 11 0.1812 11 1V3.99512C5.37258 3.99512 0 9.3677 0 15.9951V20.9951C0 21.9843 1.34354 22.057 1.95695 21.2854C4.4233 13.1539 9.87246 11.3281 12 11.3281V13.9902C12 14.8011 12.8789 15.3058 13.5852 14.8011L21 7.49512Z" 
    />
  </IconWrapper>
);