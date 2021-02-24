import { Loader } from 'components/common/Loader';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { SelectedVideoCard } from 'components/Layouts/Cards/SelectedVideoCard';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { VideosFilterLayout } from 'components/Layouts/filterLayouts/VideosFilterLayout';
import { useField } from 'effector-forms';
import { useStore } from 'effector-react';
import {
    videoSectionMarginBottom,
    videoStepPadding
} from 'pages/CampaignManager/Campaign/Create/Steps/Videos/constants';
import { noContentMessage } from 'pages/CampaignManager/Discover/constants';
import React, { FC } from 'react';
import { campaignContentStores } from 'stores/campaignContent';
import { forms } from 'stores/forms';
import { CreateCampaignStepsProps } from 'types';
import { NoVideoSpan, SelectedVideoWrapper } from './styles';

export const Videos: FC<CreateCampaignStepsProps> = () => {
    const [{ items, totalRecords }, loading] = useStore(campaignContentStores.combinedItems);
    const { value: initialContentIds } = useField(forms.createCampaignForm.fields.videos);

    const unselectedVideos = items?.filter(
        ({ womContentId }) => !initialContentIds.some(item => item.womContentId === womContentId)
    );

    return (
        <>
            <Section marginBottom={videoSectionMarginBottom}>
                <ContentWrapper height="295px" padding={videoStepPadding} width="100%">
                    {!initialContentIds.length ? (
                        <Section alignCenter justifyCenter height="100%">
                            <NoVideoSpan>
                                Click on the plus icons below to add videos to your channel. Selected videos will appear
                                here.
                                {/* Please click add icon on videos to add here */}
                            </NoVideoSpan>
                        </Section>
                    ) : (
                        <SelectedVideoWrapper>
                            {initialContentIds.map(({ uriPrimary, womContentId }) => (
                                <MarginWrapper key={womContentId} marginRight="25px" marginTop="30px">
                                    <SelectedVideoCard id={womContentId} uriPrimary={uriPrimary} />
                                </MarginWrapper>
                            ))}
                        </SelectedVideoWrapper>
                    )}
                </ContentWrapper>
            </Section>
            <VideosFilterLayout loading={loading} totalRecords={totalRecords}>
                {loading ? (
                    <Section>
                        <Loader />
                    </Section>
                ) : (
                    <Section>
                        {unselectedVideos
                            ? unselectedVideos.map(item => <VideoCard key={item.womContentId} {...item} />)
                            : noContentMessage}
                    </Section>
                )}
            </VideosFilterLayout>
        </>
    );
};
