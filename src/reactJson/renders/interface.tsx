import { RendererEnv } from "../interface/env";
import { SchemaClassName, SchemaExpression, SchemaNode, SchemaType } from "../interface/schema";

export interface BaseSchema {
    type: SchemaType;
  
    /**
     * 容器 css 类名
     */
    className?: SchemaClassName;
  
    /**
     * 配合 definitions 一起使用，可以实现无限循环的渲染器。
     */
    $ref?: string;
  
    /**
     * 是否禁用
     */
    disabled?: boolean;
  
    /**
     * 是否禁用表达式
     */
    disabledOn?: SchemaExpression;
  
    /**
     * 是否隐藏
     * @deprecated 推荐用 visible
     */
    hidden?: boolean;
  
    /**
     * 是否隐藏表达式
     * @deprecated 推荐用 visibleOn
     */
    hiddenOn?: SchemaExpression;
  
    /**
     * 是否显示
     */
  
    visible?: boolean;
  
    /**
     * 是否显示表达式
     */
    visibleOn?: SchemaExpression;
  }

  
export interface RendererProps {
    // render: (region: string, node: SchemaNode, props?: any) => JSX.Element;
    // env: RendererEnv;
    // $path: string; // 当前组件所在的层级信息
    // store?: IIRendererStore;
    // syncSuperStore?: boolean;
    // data: {
    //   [propName: string]: any;
    // };
    defaultData?: object;
    className?: any;
    [propName: string]: any;
  }