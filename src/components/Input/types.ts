import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: Record<string, unknown>;
  icon?: ComponentType<IconBaseProps>;
}

export interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
