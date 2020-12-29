import { Active, infoType } from 'types';

export interface RadioProps extends Active {}

export type RowHeaderRadioType = {
    title: string;
    quantity: string;
    inBrackets?: string;
    growType?: infoType;
    growNumber?: number;
};
