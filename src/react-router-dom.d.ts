// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLinkProps } from 'react-router-dom';

declare module 'react-router-dom' {
  interface NavLinkProps {
    activeclassname?: string;
  }
}
