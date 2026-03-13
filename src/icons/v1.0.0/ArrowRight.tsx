import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ArrowRight = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 27 22" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M7.5 3.00488C7.5 0.695529 10 -0.748322 12 0.40625L25.5 8.20117C27.4998 9.3559 27.4998 12.2417 25.5 13.3965L12 21.1914C10 22.346 7.5 20.9021 7.5 18.5928V3.00488ZM3 6.79883C4.65685 6.79883 5.99999 8.14198 6 9.79883V11.7988C6 13.4557 4.65685 14.7988 3 14.7988C1.34315 14.7988 -7.24234e-08 13.4557 0 11.7988V9.79883C5.08471e-06 8.14198 1.34315 6.79883 3 6.79883Z" />
  </IconWrapper>
);