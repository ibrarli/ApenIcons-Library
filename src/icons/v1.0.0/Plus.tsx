import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Plus = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 27 27" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M13.5 0C15.2042 5.63339e-07 16.5859 1.38174 16.5859 3.08594V10.4141H23.9141C25.6183 10.4141 27 11.7958 27 13.5C27 15.2042 25.6183 16.5859 23.9141 16.5859H16.5859V23.9141C16.5859 25.6183 15.2042 27 13.5 27C11.7958 27 10.4141 25.6183 10.4141 23.9141V16.5859H3.08594C1.38174 16.5859 0 15.2042 0 13.5C0 11.7958 1.38174 10.4141 3.08594 10.4141H10.4141V3.08594C10.4141 1.38174 11.7958 7.44927e-08 13.5 0Z" />
  </IconWrapper>
);