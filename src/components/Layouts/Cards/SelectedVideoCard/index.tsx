import removeIdImg from 'assets/img/increment.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { addIdImgDiameter, removeImgTop } from 'components/Layouts/Cards/SelectedVideoCard/constants';
import { VideoCard } from 'components/Layouts/Cards/SelectedVideoCard/styles';
import { useField } from 'effector-forms';
import React, { FC } from 'react';
import { creatorsEvents } from 'stores/creators';
import { forms } from 'stores/forms';
import { modalEvents } from 'stores/modal';
import { tagsEvents } from 'stores/tags';
import { SelectedVideoCardWrapper } from './styles';

interface Props {
    id?: string;
    uriPrimary?: string | null;
    removeDeleteImg?: boolean;
    tags?: string[] | null;
}

export const SelectedVideoCard: FC<Props> = ({ id = '', uriPrimary, removeDeleteImg = false, tags }) => {
    const { value: contentIds, onChange } = useField(forms.createCampaignForm.fields.videos);

    const handlerRemove = () => {
        onChange(contentIds.filter(items => items.womContentId !== id));

        if (tags) tagsEvents.removeTags(tags);
        if (id) creatorsEvents.removeCreatorsId(id);
    };
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
