import { PageSchema } from "../renders/page/interface";

// 每加个类型，这补充一下。
export type SchemaType = 'page'


export type SchemaFunction = string | Function;
export type SchemaExpression = string;
export type SchemaClassName =
  | string
  | {
      [propName: string]: true | false | null | SchemaExpression;
    };

export interface Schema {
    type: string;
    detectField?: string;
    visibleOn?: string;
    hiddenOn?: string;
    children?: JSX.Element | ((props: any, schema?: any) => JSX.Element) | null;
    definitions?: Definitions;
    [propName: string]: any;
  }
  export type SchemaNode = Schema | string | Array<Schema | string>;

  export interface Definitions {
    [propName: string]: SchemaNode;
  }

  export type SchemaCollection =
  | SchemaObject

  export type SchemaObject =
  | PageSchema