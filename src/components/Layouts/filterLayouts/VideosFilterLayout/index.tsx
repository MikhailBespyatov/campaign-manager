import { TagFilter } from 'components/filters/TagFilter';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { Pagination } from 'components/Layouts/Pagination';
import { defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { Loading, TotalRecords } from 'types';

interface Props extends TotalRecords, Loading {}

export const VideosFilterLayout: FC<Props> = ({ totalRecords, children, loading }) => {
    const { tagsAll, tagsAny, pageIndex } = useStore(campaignContentStores.values);
    const isFirst = useStore(campaignContentStores.isFirst);

    const { updateAndRemoveValues, updateValues, updateIsFirst, setDefaultValues } = campaignContentEvents;

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

    useEffect(() => {
        if (isFirst) {
            setDefaultValues();
            updateIsFirst();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <TagFilter defaultChecked={!!tagsAll} tagsValues={tagsAll || tagsAny || []} onChange={onTagsFilterChange} />
            {children}
            <Section justifyCenter>
                {!loading && (
                    <Pagination
                        currentIndex={pageIndex + 1}
                        totalItems={totalRecords !== -1 ? totalRecords : 0}
                        onChange={onPaginationChange}
                    />
                )}
            </Section>
        </>
    );
};
