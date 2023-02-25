export type ApiString = string;
export type SchemaTokenizeableString = string;
export type SchemaUrlPath = SchemaTokenizeableString;
export type SchemaExpression = string;

export interface SchemaApiObject {
    /**
     * API 发送类型
     */
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
  
    /**
     * API 发送目标地址
     */
    url: SchemaUrlPath;
  
    /**
     * 用来控制携带数据. 当key 为 `&` 值为 `$$` 时, 将所有原始数据打平设置到 data 中. 当值为 $$ 将所有原始数据赋值到对应的 key 中. 当值为 $ 打头时, 将变量值设置到 key 中.
     */
    data?: {
      [propName: string]: any;
    };
  
    /**
     * 用来做接口返回的数据映射。
     */
    responseData?: {
      [propName: string]: any;
    };
  
    /**
     * 如果 method 为 get 的接口，设置了 data 信息。
     * 默认 data 会自动附带在 query 里面发送给后端。
     *
     * 如果想通过 body 发送给后端，那么请把这个配置成 false。
     *
     * 但是，浏览器还不支持啊，设置了只是摆设。
     */
    attachDataToQuery?: boolean;
  
    /**
     * 发送体的格式
     */
    dataType?: 'json' | 'form-data' | 'form';
  
    /**
     * 如果是文件下载接口，请配置这个。
     */
    responseType?: 'blob';
  
    /**
     * 携带 headers，用法和 data 一样，可以用变量。
     */
    headers?: {
      [propName: string]: string | number;
    };
  
    /**
     * 设置发送条件
     */
    sendOn?: SchemaExpression;
  
    /**
     * 默认都是追加模式，如果想完全替换把这个配置成 true
     */
    replaceData?: boolean;
  
    /**
     * 是否自动刷新，当 url 中的取值结果变化时，自动刷新数据。
     */
    autoRefresh?: boolean;
  
    /**
     * 如果设置了值，同一个接口，相同参数，指定的时间（单位：ms）内请求将直接走缓存。
     */
    cache?: number;
  
    /**
     * qs 配置项
     */
    qsOptions?: {
      arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma';
      indices?: boolean;
      allowDots?: boolean;
    };
}
export interface PlainObject {
    [propsName: string]: any;
}

export interface fetcherResult {
    data?: {
      data: object;
      status: number;
      msg: string;
      msgTimeout?: number;
      errors?: {
        [propName: string]: string;
      };
    };
    status: number;
    headers: object;
  }

export interface ApiObject extends SchemaApiObject {
    config?: {
      withCredentials?: boolean;
      cancelExecutor?: (cancel: Function) => void;
    };
    body?: PlainObject;
    query?: PlainObject;
    adaptor?: (payload: object, response: fetcherResult, api: ApiObject) => any;
    requestAdaptor?: (api: ApiObject) => ApiObject;
  }
  
export type Api = ApiString | ApiObject;
