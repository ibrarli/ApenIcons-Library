import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Kebab = (props: IconProps) => (
  <IconWrapper {...props} viewBox="0 0 17 17">
    {/* The three skewer "chunks" (dots) */}
    <circle cx="13.0167" cy="3" r="2" fill={props.color || 'currentColor'} stroke="none" />
    <circle cx="10.0167" cy="6" r="2" fill={props.color || 'currentColor'} stroke="none" />
    <circle cx="7.01666" cy="9" r="2" fill={props.color || 'currentColor'} stroke="none" />
    
    {/* The diagonal skewer path */}
    <path 
      d="M0.309556 14.2929C0.113056 14.4715 -0.000154018 14.718 -4.05312e-06 14.9833C-0.000154138 15.2484 0.113056 15.5106 0.309556 15.7071C0.506056 15.9036 0.768263 16.0168 1.03333 16.0167C1.2987 16.0168 1.5452 15.9036 1.72377 15.7071C1.72377 15.7071 1.72377 15.7071 1.72377 15.7071C1.96198 15.4453 2.2002 15.1835 2.43841 14.9218C6.72628 10.2096 11.0141 5.49749 15.302 0.785355C15.5402 0.523572 15.7784 0.261784 16.0167 0C15.7549 0.238214 15.4931 0.476432 15.2313 0.714644C10.5192 5.00251 5.80704 9.29038 1.09491 13.5782C0.833126 13.8165 0.571341 14.0547 0.309556 14.2929Z" 
      fill={props.color || 'currentColor'} 
      stroke="none"
    />
  </IconWrapper>
);