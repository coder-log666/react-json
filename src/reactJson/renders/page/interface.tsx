import { SchemaClassName, SchemaCollection } from "../../interface/schema";
import { BaseSchema, RendererProps } from "../interface";

export interface PageSchema extends BaseSchema {
    /**
     * 指定为 page 渲染器。
     */
    type: "page";
  
    /**
     * 页面标题
     */
    title?: string;
  
    /**
     * 页面副标题
     */
    subTitle?: string;

    /**
     * 内容区域
     */
    body?: SchemaCollection;
  
    /**
     * 内容区 css 类名
     */
    bodyClassName?: SchemaClassName;
  
    /**
     * 配置 header 容器 className
     */
    headerClassName?: SchemaClassName;
}

  
export interface PageProps
  extends RendererProps,
    Omit<PageSchema, "type" | "className"> {
  data: any;
//   store: IServiceStore;
  location?: Location;
}