import { TagFilter } from 'components/filters/TagFilter';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { Row, Section, FlexGrow } from 'components/grid/wrappers/FlexWrapper';
import { Pagination } from 'components/Layouts/Pagination';
import { defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { Loading, TotalRecords } from 'types';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import {
    videoSectionMarginBottom,
    videoStepPadding
} from 'pages/CampaignManager/Campaign/Create/Steps/Videos/constants';
import { Span } from 'components/common/typography/Span';
import { getTotalItems } from 'utils/usefulFunctions';

const { updateAndRemoveValues, updateValues, updateIsFirst, setDefaultValues } = campaignContentEvents;

interface Props extends TotalRecords, Loading {}

export const VideosFilterLayout: FC<Props> = ({ totalRecords, children, loading }) => {
    const { tagsAll, pageIndex, limit, tagsAny } = useStore(campaignContentStores.values);

    const isFirst = useStore(campaignContentStores.isFirst);

    const onTagsFilterChange: onTagsFilterChangeType = (checked, values) =>
        checked
            ? updateAndRemoveValues({
                  removeValues: ['tagsAll'],
                  updateValues: {
                      tagsAny: values,
                      pageIndex: defaultPage
                  }
              })
            : updateAndRemoveValues({
                  removeValues: ['tagsAny'],
                  updateValues: {
                      tagsAll: values,
                      pageIndex: defaultPage
                  }
              });

    const onPaginationChange = (current: number) =>
        updateValues({
            pageIndex: current
        });

    const onSizeChange = (current: number, size: number) =>
        updateValues({
            pageIndex: current,
            limit: size
        });

    useEffect(() => {
        if (isFirst) {
            setDefaultValues();
            updateIsFirst();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Section marginBottom={videoSectionMarginBottom}>
                <ContentWrapper padding={videoStepPadding} width="100%">
                    <TagFilter
                        defaultChecked={!!tagsAll}
                        tagsValues={tagsAll || tagsAny || []}
                        onChange={onTagsFilterChange}
                    />
                </ContentWrapper>
            </Section>
            <FlexGrow marginBottom={videoSectionMarginBottom}>
                <ContentWrapper height="100%" padding={videoStepPadding} width="100%">
                    <Row marginBottom="16px">
                        <Span fontSize="14px" fontWeight="600" lineHeight="17px">
                            Videos
                        </Span>
                    </Row>
                    {children}
                    <Section justifyCenter marginBottom="75px">
                        {!loading && (
                            <Pagination
                                currentIndex={pageIndex + 1}
                                defaultSize={limit}
                                totalItems={getTotalItems(totalRecords)}
                                onChange={onPaginationChange}
                                onSizeChange={onSizeChange}
                            />
                        )}
                    </Section>
                </ContentWrapper>
            </FlexGrow>
        </>
    );
};
