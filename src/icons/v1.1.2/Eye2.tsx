import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Eye2 = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 22 14">
    {/* The main eyelid shape - filled */}
    <path 
      d="M11 3V2H11L11 3ZM20.3545 8L21.1855 8.55633L21.5579 8L21.1855 7.44367L20.3545 8ZM11 13L11 14H11V13ZM1.64551 8L0.814542 7.44368L0.44209 8L0.814541 8.55632L1.64551 8ZM11 3V4C14.5526 4 17.6828 5.80691 19.5235 8.55633L20.3545 8L21.1855 7.44367C18.9895 4.16371 15.2482 2 11 2V3ZM20.3545 8L19.5235 7.44367C17.6828 10.1931 14.5526 12 11 12V13V14C15.2482 14 18.9895 11.8363 21.1855 8.55633L20.3545 8ZM11 13L11 12C7.44741 12 4.31719 10.1931 2.47647 7.44368L1.64551 8L0.814541 8.55632C3.01047 11.8363 6.75177 14 11 14L11 13ZM1.64551 8L2.47647 8.55632C4.31719 5.80689 7.44742 4.00003 11 4L11 3L11 2C6.75178 2.00004 3.01047 4.16367 0.814542 7.44368L1.64551 8Z" 
      fill={props.color || 'currentColor'} 
      stroke="none"
    />
    
    {/* The pupil/iris - filled */}
    <path 
      d="M11 5C12.6569 5 14 6.34315 14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5Z" 
      fill={props.color || 'currentColor'}
      stroke="none"
    />
    
    {/* The upper lashes - stroked */}
    <path d="M20 6L21 5" />
    <path d="M2 6L1 5" />
    <path d="M11 2L11 1" />
    <path d="M16 4L17 2" />
    <path d="M6 4L5 2" />
  </IconWrapper>
);