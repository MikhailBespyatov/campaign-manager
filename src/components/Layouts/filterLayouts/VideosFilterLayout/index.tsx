import { Span } from 'components/common/typography/Span';
import { TagFilter } from 'components/filters/TagFilter';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { Pagination } from 'components/Layouts/Pagination';
import { defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import {
    videoSectionMarginBottom,
    videoStepPadding
} from 'pages/CampaignManager/Campaign/Create/Steps/Videos/constants';
import React, { FC, useEffect, useState } from 'react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { FilterProperty, Loading, SortType, TotalRecords } from 'types';
import { getOrderByDescState, getTotalItems, toggleSortType } from 'utils/usefulFunctions';
import { SortSelectorButton } from 'components/common/buttons/SortSelectorButton';
import { ResetButton } from 'components/common/buttons/ResetButton';
import { defaultSortsState } from './constants';

const { updateAndRemoveValues, updateValues, updateIsFirst, setDefaultValues } = campaignContentEvents;

interface Props extends TotalRecords, Loading {}

export const VideosFilterLayout: FC<Props> = ({ totalRecords, children, loading }) => {
    const { tagsAll, pageIndex, limit, tagsAny } = useStore(campaignContentStores.values);

    const [sortsState, setSortsState] = useState(defaultSortsState);
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

    const onSortFilterChange = (
        state: SortType,
        setSortState: (state: SortType) => void,
        property: WOM.ContentOrderByProperty
    ) => () => {
        const sortState = toggleSortType(state);
        /* When changed state of filter (for example Likes) need clear state for another filters */
        /* Since we save the state of the filter until it is reset, we can reset all filters at once. */
        setSortsState(defaultSortsState);
        setSortState(sortState);
        updateValues({
            orderByDesc: getOrderByDescState(sortState),
            orderByProperty: sortState === 'none' ? undefined : property
        });
    };

    const onLikesChange = onSortFilterChange(
        sortsState.likes,
        state => setSortsState(sortsState => ({ ...sortsState, likes: state })),
        FilterProperty.Likes
    );
    const onViewsChange = onSortFilterChange(
        sortsState.views,
        state => setSortsState(sortsState => ({ ...sortsState, views: state })),
        FilterProperty.Views
    );
    const onDateAddedChange = onSortFilterChange(
        sortsState.dateAdded,
        state => setSortsState(sortsState => ({ ...sortsState, dateAdded: state })),
        FilterProperty.DateAddedUtc
    );

    const onReset = () => setDefaultValues();

    useEffect(() => {
        if (isFirst) {
            setDefaultValues();
            updateIsFirst();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Mock
    // const valuesLanguage = ['Russian', 'Chinese', 'Latin', 'Spanish', 'French'];
    // const [activeLanguage, setActiveLanguage] = useState<string[]>([]);

    // const onChangeLanguage = (language: string) =>
    //     activeLanguage.includes(language) ? setActiveLanguage([]) : setActiveLanguage([language]);

    // const valuesRegion = [
    //     'North America',
    //     'Africa',
    //     'Eastern Europe',
    //     'Asia',
    //     'Western Europe',
    //     'Oceania',
    //     'Middle East',
    //     'Unknown'
    // ];

    // const [checkedRegion, setCheckedRegion] = useState<string[]>([]);

    // const onChangeRegion = (region: string) =>
    //     checkedRegion.includes(region)
    //         ? setCheckedRegion(regions => regions.filter(item => item !== region))
    //         : setCheckedRegion(regions => [...regions, region]);

    return (
        <>
            <Section marginBottom={videoSectionMarginBottom}>
                <ContentWrapper padding={videoStepPadding} width="100%">
                    <Section alignCenter noWrap>
                        <TagFilter
                            defaultChecked={!!tagsAll}
                            tagsValues={tagsAll || tagsAny || []}
                            onChange={onTagsFilterChange}
                        >
                            <FlexGrow flexGrow="0" flexShrink="0" height="32px" marginLeft="16px" marginRight="43px">
                                <SortSelectorButton state={sortsState.likes} onChange={onLikesChange}>
                                    Likes
                                </SortSelectorButton>
                            </FlexGrow>
                            <FlexGrow flexGrow="0" flexShrink="0" height="32px" marginRight="43px">
                                <SortSelectorButton state={sortsState.views} onChange={onViewsChange}>
                                    Views
                                </SortSelectorButton>
                            </FlexGrow>
                            <FlexGrow flexGrow="0" flexShrink="0" height="32px" marginRight="43px">
                                <SortSelectorButton state={sortsState.dateAdded} onChange={onDateAddedChange}>
                                    Data Added
                                </SortSelectorButton>
                            </FlexGrow>
                            <FlexGrow flexGrow="0" flexShrink="0">
                                <ResetButton onClick={onReset}>Reset</ResetButton>
                            </FlexGrow>
                        </TagFilter>
                        {/*<FlexGrow flexGrow="0" flexShrink="0" height="32px" marginRight="16px" width="120px">*/}
                        {/*    <SelectorFilter*/}
                        {/*        checkedValues={activeLanguage}*/}
                        {/*        title="Language"*/}
                        {/*        values={valuesLanguage}*/}
                        {/*        onChange={onChangeLanguage}*/}
                        {/*    />*/}
                        {/*</FlexGrow>*/}
                        {/*<FlexGrow flexGrow="0" flexShrink="0" height="32px" marginRight="43px" width="150px">*/}
                        {/*    <SelectorFilter*/}
                        {/*        checkedValues={checkedRegion}*/}
                        {/*        title="Region"*/}
                        {/*        type="checkbox"*/}
                        {/*        values={valuesRegion}*/}
                        {/*        view="columns"*/}
                        {/*        onChange={onChangeRegion}*/}
                        {/*    />*/}
                        {/*</FlexGrow>*/}
                    </Section>
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
                    <Section justifyCenter marginBottom="20px" marginTop="57px">
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
