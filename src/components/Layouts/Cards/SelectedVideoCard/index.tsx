import React, { FC } from 'react';
import { SelectedVideoCardWrapper } from './styles';
import { VideoCard } from 'components/Layouts/Cards/SelectedVideoCard/styles';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { addIdImgDiameter, removeImgTop } from 'components/Layouts/Cards/SelectedVideoCard/constants';
import removeIdImg from 'assets/img/increment.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { modalEvents } from 'stores/modal';
import { useField } from 'effector-forms';
import { forms } from 'stores/forms';

interface Props {
    id?: string;
    uriPrimary?: string | null;
    removeDeleteImg?: boolean;
}

export const SelectedVideoCard: FC<Props> = ({ id = '', uriPrimary, removeDeleteImg = false }) => {
    const { value: contentIds, onChange } = useField(forms.createCampaignForm.fields.videos);

    const handlerRemove = () => onChange(contentIds.filter(items => items.womContentId !== id));
    const openCardModal = () => modalEvents.openCardModal({ id });

    return (
        <SelectedVideoCardWrapper>
            <VideoCard background={uriPrimary || ''} onClick={openCardModal} />
            {!removeDeleteImg && (
                <AbsoluteWrapper right={removeImgTop} top={removeImgTop}>
                    <CustomImg
                        pointer
                        height={addIdImgDiameter}
                        src={removeIdImg}
                        width={addIdImgDiameter}
                        onClick={handlerRemove}
                    />
                </AbsoluteWrapper>
            )}
        </SelectedVideoCardWrapper>
    );
};
