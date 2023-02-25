import { Action } from "./action";
import { Api } from "./api";
import { Schema } from "./schema";
import React from 'react';
import { RendererConfig } from "./render";
import Payload from "./payload";

export interface RendererEnv {
    fetcher: (api: Api, data?: any, options?: object) => Promise<Payload>;
    isCancel: (val: any) => boolean;
    notify: (
      type: 'error' | 'success',
      msg: string,
      conf?: {
        closeButton?: boolean;
        timeout?: number;
      }
    ) => void;
    jumpTo: (to: string, action?: Action, ctx?: object) => void;
    alert: (msg: string) => void;
    confirm: (msg: string, title?: string) => Promise<boolean>;
    updateLocation: (location: any, replace?: boolean) => void;
  
    /**
     * 阻止路由跳转，有时候 form 没有保存，但是路由跳转了，导致页面没有更新，
     * 所以先让用户确认一下。
     *
     * 单页模式需要这个，如果非单页模式，不需要处理这个。
     */
    blockRouting?: (fn: (targetLocation: any) => void | string) => () => void;
    isCurrentUrl: (link: string, ctx?: any) => boolean | {params?: object};
  
    /**
     * 监控路由变化，如果 jssdk 需要做单页跳转需要实现这个。
     */
    watchRouteChange?: (fn: () => void) => () => void;
    rendererResolver?: (
      path: string,
      schema: Schema,
      props: any
    ) => null | RendererConfig;
    copy?: (contents: string) => void;
    getModalContainer?: () => HTMLElement;
    // theme: ThemeInstance;
    affixOffsetTop: number;
    affixOffsetBottom: number;
    richTextToken: string;
    loadRenderer: (
      schema: Schema,
      path: string,
      reRender: Function
    ) => Promise<React.ElementType> | React.ElementType | JSX.Element | void;
    loadChartExtends?: () => void | Promise<void>;
    [propName: string]: any;
  }