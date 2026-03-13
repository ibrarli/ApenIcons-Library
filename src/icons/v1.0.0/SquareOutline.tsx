import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const SquareOutline = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 38 38" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M33 36V38H5V36H33ZM36 33V5C36 3.34315 34.6569 2 33 2H5C3.34315 2 2 3.34315 2 5V33C2 34.6569 3.34315 36 5 36V38L4.74316 37.9932C2.18618 37.8638 0.136224 35.8138 0.00683594 33.2568L0 33V5C0 2.23858 2.23858 9.66384e-08 5 0H33C35.7614 0 38 2.23858 38 5V33C38 35.6753 35.8989 37.8595 33.2568 37.9932L33 38V36C34.6569 36 36 34.6569 36 33Z" />
  </IconWrapper>
);