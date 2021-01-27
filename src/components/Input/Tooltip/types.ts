import { ReactNode } from 'react';

export interface TooltipProps {
  title: string | undefined;
  children?: ReactNode;
  className?: string;
}
