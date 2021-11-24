export interface Action {
  type: string;
  payload?: Payload; 
}

export interface Payload {
  params?: any;
  callback?: (data: any) => any;
  response?: any;
  data?: any;
  pagination: any;
}