import React, { FC } from 'react';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { Pagination } from 'components/Layouts/Pagination';
import { Loading, TotalRecords } from 'types';
import { getTotalItems } from 'utils/usefulFunctions';

export interface PaginationLayoutProps
    extends TotalRecords,
        Loading,
        Pick<WOM.ContentQueryRequest, 'pageIndex' | 'limit'> {
    onPaginationChange: (current: number) => void;
    onSizeChange: (current: number, size: number) => void;
}

export const PaginationLayout: FC<PaginationLayoutProps> = ({
    children,
    loading,
    totalRecords,
    onPaginationChange,
    pageIndex,
    limit,
    onSizeChange
}) => (
    <>
        {children}
        <Section justifyCenter marginTop="55px">
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
    </>
);
