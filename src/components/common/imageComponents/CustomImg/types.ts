import { BorderProperties, BorderRadiusProperties, Pointer, Rotation, Sizes } from 'types';

export interface ImgWrapperProps
    extends Rotation,
        Pointer,
        BorderRadiusProperties,
        Sizes,
        Pick<BorderProperties, 'borderColor'> {}
