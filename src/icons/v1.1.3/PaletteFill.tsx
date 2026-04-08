import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const PaletteFill = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 22" 
    fill={props.color || 'currentColor'}
    stroke="none"
  >
    {/* Solid Palette Geometry with Punched-out Pigment Dots */}
    <path 
      d="M11 0C17.0751 0 22 4.92487 22 11C22 19.8611 4.71038 11.4326 9.9248 20.3584C10.3351 21.0606 9.86707 21.9718 9.06641 21.8301C3.91356 20.9161 0 16.4153 0 11C1.28852e-07 4.92487 4.92487 1.28855e-07 11 0ZM4.5 11C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14C5.32843 14 6 13.3284 6 12.5C6 11.6716 5.32843 11 4.5 11ZM17.5 7C16.6716 7 16 7.67157 16 8.5C16 9.32843 16.6716 10 17.5 10C18.3284 10 19 9.32843 19 8.5C19 7.67157 18.3284 7 17.5 7ZM6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5ZM12.5 4C11.6716 4 11 4.67157 11 5.5C11 6.32843 11.6716 7 12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4Z" 
    />
  </IconWrapper>
);