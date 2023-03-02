import { ComponentClass, LazyExoticComponent } from 'react';

export type ComponentState = LazyExoticComponent | null;

export interface Props {
  componentImport: Promise<{ default: LazyExoticComponent<ComponentClass> }>;
  componentChunkName: string;
  componentProps: { [key: string] };
}

export interface State {
  Component: ComponentClass;
}
