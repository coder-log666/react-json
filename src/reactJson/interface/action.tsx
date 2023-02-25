import { Button } from "./button";
import { SchemaNode } from "./schema";

export interface Action extends Button {
    actionType?:
      | 'submit'
      | 'copy'
      | 'reload'
      | 'ajax'
      | 'dialog'
      | 'drawer'
      | 'jump'
      | 'link'
      | 'url'
      | 'close'
      | 'confirm'
      | 'add'
      | 'remove'
      | 'delete'
      | 'edit'
      | 'cancel'
      | 'next'
      | 'prev'
      | 'reset'
      | 'reset-and-submit'
      | 'clear'
      | 'clear-and-submit';
    payload?: any;
    dialog?: SchemaNode;
    to?: string;
    target?: string;
    link?: string;
    url?: string;
    mergeData?: boolean;
    reload?: string;
    messages?: {
      success?: string;
      failed?: string;
    };
    feedback?: any;
    required?: Array<string>;
    [propName: string]: any;
  }