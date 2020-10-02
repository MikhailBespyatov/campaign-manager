export type infoType = 'default' | 'success' | 'error' | 'disabled';
export type numberOrEmptyString = number | '';
export type noop = () => void;

export type CardModal = {
    visible: boolean;
    id: string;
};
