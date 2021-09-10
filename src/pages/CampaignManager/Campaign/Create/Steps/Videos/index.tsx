import { Loader } from 'components/dynamic/Loader';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { SelectedVideoCard } from 'components/Layouts/Cards/SelectedVideoCard';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { EmptySearchResult } from 'components/Layouts/EmptySearchResult';
import { VideosFilterLayout } from 'components/Layouts/filterLayouts/VideosFilterLayout';
import { defaultPage } from 'constants/defaults';
import { useField } from 'effector-forms';
import { useStore } from 'effector-react';
import {
    selectedVideosFieldBorder,
    videoSectionMarginBottom,
    videoStepPadding
} from 'pages/CampaignManager/Campaign/Create/Steps/Videos/constants';
import { CardCatalogGrid } from 'pages/CampaignManager/Discover/styles';
import React, { FC, useEffect } from 'react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { forms } from 'stores/forms';
import { organizationsStores } from 'stores/organizations';
import { CreateCampaignStepsProps } from 'types';
import { NoVideoSpan, SelectedVideoWrapper } from './styles';

export const Videos: FC<CreateCampaignStepsProps> = () => {
    const [{ items, totalRecords }, loading] = useStore(campaignContentStores.combinedItems);
    const { value: initialContentIds } = useField(forms.createCampaignForm.fields.videos);
    const { mandatoryTags } = useStore(organizationsStores.item);
    const { validate } = useField(forms.createCampaignForm.fields.videos);

    useEffect(
        () => {
            mandatoryTags &&
                campaignContentEvents.updateValues({
                    tagsAny: mandatoryTags,
                    tagsAll: undefined,
                    pageIndex: defaultPage
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [mandatoryTags]
    );

    const unselectedVideos = items?.filter(
        ({ womContentId }) => !initialContentIds.some(item => item.womContentId === womContentId)
    );

    useEffect(() => {
        validate();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ContentWrapper
                border={selectedVideosFieldBorder}
                height="220px"
                marginBottom={videoSectionMarginBottom}
                padding={videoStepPadding}
                width="100%"
            >
                <Section alignCenter height="100%">
                    {!initialContentIds.length ? (
                        <Row alignCenter justifyCenter height="fit-content" margin="auto" width="365px">
                            <NoVideoSpan>
                                Click on the plus icons below to add videos to your channel. Selected videos will appear
                                here.
                            </NoVideoSpan>
                        </Row>
                    ) : (
                        <SelectedVideoWrapper>
                            {initialContentIds.map(({ uriPrimary, womContentId, tags }) => (
                                <MarginWrapper key={womContentId} marginRight="25px" marginTop="7px">
                                    <SelectedVideoCard id={womContentId} tags={tags} uriPrimary={uriPrimary} />
                                </MarginWrapper>
                            ))}
                        </SelectedVideoWrapper>
                    )}
                </Section>
            </ContentWrapper>

            <VideosFilterLayout loading={loading} totalRecords={totalRecords}>
                {loading ? (
                    <Section>
                        <Loader />
                    </Section>
                ) : (
                    <Section justifyCenter>
                        {unselectedVideos?.length ? (
                            <CardCatalogGrid>
                                {unselectedVideos.map(item => (
                                    <VideoCard key={item.womContentId} {...item} />
                                ))}
                            </CardCatalogGrid>
                        ) : (
                            <Section justifyCenter>
                                <EmptySearchResult title="Sorry! No result found" />
                            </Section>
                        )}
                    </Section>
                )}
            </VideosFilterLayout>
        </>
    );
};
