import {order} from './orderInterface';

export interface responseInterface {
    items: Array<order>;
    error: string;
};