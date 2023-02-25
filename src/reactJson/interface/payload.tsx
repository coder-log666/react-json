export default interface Payload {
    ok: boolean;
    msg: string;
    msgTimeout?: number;
    data: any;
    status: number;
    errors?: {
      [propName: string]: string;
    };
  }