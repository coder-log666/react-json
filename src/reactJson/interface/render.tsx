import { RendererProps } from "../renders/interface";
import { RendererEnv } from "./env";
import { SchemaNode } from "./schema";

export interface RendererBasicConfig {
    test?: RegExp ;
    name?: string;
}

export type RendererComponent = React.ComponentType<RendererProps> & {
    propsList?: Array<any>;
};

export interface RendererConfig extends RendererBasicConfig {
    component: RendererComponent;
    Renderer?: RendererComponent; // 原始组件
}


