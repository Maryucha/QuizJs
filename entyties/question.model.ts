import {Option} from './option.model';

export interface Question {
    id?: string;
    question?: string;
    options?: Option[];
}