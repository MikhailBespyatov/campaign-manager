export type infoType = 'default' | 'success' | 'error' | 'disabled';
export type numberOrEmptyString = number | '';
export type noop = () => void;

export type CardModal = {
    visible: boolean;
    id: string;
};

export type RowHeaderRadioType = {
    title: string;
    quantity: string;
    inBrackets?: string;
    growType: infoType;
    growNumber: number;
};
