import React from 'react';
import { Action } from '../interface/action';
import { RendererBasicConfig, RendererComponent, RendererConfig } from '../interface/render';
import { Schema } from '../interface/schema';


export interface RootRenderProps {
  location?: Location;
  theme?: string;
  [propName: string]: any;
}

export interface RenderOptions {
  session?: string;
  // fetcher?: (config: fetcherConfig) => Promise<fetcherResult>;
  wsFetcher?: (
    ws: string,
    onMessage: (data: any) => void,
    onError: (error: any) => void
  ) => void;
  isCancel?: (value: any) => boolean;
  notify?: (
    type: 'error' | 'success',
    msg: string,
    conf?: {
      closeButton?: boolean;
      timeout?: number;
    }
  ) => void;
  jumpTo?: (to: string, action?: Action, ctx?: object) => void;
  alert?: (msg: string) => void;
  confirm?: (msg: string, title?: string) => boolean | Promise<boolean>;
  rendererResolver?: (
    path: string,
    schema: Schema,
    props: any
  ) => null | RendererConfig;
  copy?: (contents: string) => void;
  getModalContainer?: () => HTMLElement;
  loadRenderer?: (
    schema: Schema,
    path: string,
    reRender: Function
  ) => Promise<React.ElementType> | React.ElementType | JSX.Element | void;
  affixOffsetTop?: number;
  affixOffsetBottom?: number;
  richTextToken?: string;
  [propName: string]: any;
}




export function render(
    schema: Schema,
    props: RootRenderProps = {},
    options: RenderOptions = {},
    pathPrefix: string = ''
  ): JSX.Element {
    let type = schema.type;
    let render = renderers.find((renderer)=>{
        if (renderer['name'] == type) {
            return true
        }
        return false
    })
    let JsonComponent: RendererComponent = render.component
    return <JsonComponent {...schema}/>
  }

  const renderers: Array<RendererConfig> = [];
export function Renderer(config: RendererBasicConfig): Function {
    return function <T extends RendererComponent>(component: T): T {
      debugger
      const renderer: RendererConfig = {component: component, name: config.name}
      renderers.push(renderer)
      return renderer.component as T;
    };
}