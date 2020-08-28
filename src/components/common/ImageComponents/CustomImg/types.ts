import { Pointer, Rotation } from 'types';

export interface ImgWrapperProps extends Rotation, Pointer {
    width?: string;
    height?: string;
    borderRadius?: string;
}
