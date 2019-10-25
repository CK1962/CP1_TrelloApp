import { StatusCode } from '../enums/status-code.enum';

export interface ITodo {
    id: number;
    title: string;
    status: StatusCode;
}


