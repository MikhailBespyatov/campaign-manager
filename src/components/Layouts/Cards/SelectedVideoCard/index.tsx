import React, { FC } from 'react';
import { SelectedVideoCardWrapper } from './styles';
import { VideoCard } from 'components/Layouts/Cards/SelectedVideoCard/styles';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { addIdImgDiameter, removeImgTop } from 'components/Layouts/Cards/SelectedVideoCard/constants';
import removeIdImg from 'assets/img/increment.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { campaignsEvents } from 'stores/campaigns';

interface Props {
    id?: string;
    uriPrimary?: string | null;
}

export const SelectedVideoCard: FC<Props> = ({ id, uriPrimary }) => {
    const handlerRemove = () => campaignsEvents.removeContentById(id || '');
    return (
        <SelectedVideoCardWrapper>
            <VideoCard background={uriPrimary || ''} />
            <AbsoluteWrapper right={removeImgTop} top={removeImgTop}>
                <CustomImg
                    pointer
                    height={addIdImgDiameter}
                    rotate={45}
                    src={removeIdImg}
                    width={addIdImgDiameter}
                    onClick={handlerRemove}
                />
            </AbsoluteWrapper>
        </SelectedVideoCardWrapper>
    );
};
