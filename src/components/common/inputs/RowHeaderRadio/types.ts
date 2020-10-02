import { Active, infoType, Quantity } from 'types';

export interface RadioProps extends Quantity, Active {}

export type RowHeaderRadioType = {
    title: string;
    quantity: string;
    inBrackets?: string;
    growType?: infoType;
    growNumber?: number;
};
