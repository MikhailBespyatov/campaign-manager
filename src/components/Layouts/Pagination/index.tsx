import leftArrowImg from 'assets/img/left_arrow.svg';
import rightArrowImg from 'assets/img/right_arrow.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Select } from 'components/common/inputs/Select';
import {
    arrowImgHeight,
    arrowImgWidth,
    pagination,
    PaginationCellFontSize,
    PaginationCellFontWeight,
    paginationCellHeight,
    PaginationCellLineHeight,
    paginationLimit,
    sizeValues
} from 'components/Layouts/Pagination/constants';
import {
    Arrow,
    PaginationCell,
    PaginationInput,
    PaginationWrapper,
    Wrapper,
    PaginationBlockWrapper
} from 'components/Layouts/Pagination/styles';
import { defaultLimit } from 'constants/defaults';
import React, { ChangeEvent, KeyboardEvent, useMemo, useState } from 'react';
import { Span } from 'components/common/typography/Span';
import { Row, FlexGrow } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';

interface WrapperProps {
    currentIndex: number;
    totalItems?: number;
    defaultSize?: number;
    onChange: (current: number) => void;
    onSizeChange: (current: number, size: number) => void;
}

interface Props {
    activeIndex: number;
    total: number;
    onChange: (current: number) => void;
}

const SmallPager = ({ activeIndex, total, onChange }: Props) => (
    <>
        {pagination
            // * first and last cells are rendered in parent element
            // * so we need exclude them from enumeration (total - 2)
            .filter((_, i) => i < total - 2)
            .map((_, i) => (
                <PaginationCell key={i.toString()} active={i + 2 === activeIndex} onClick={() => onChange(i + 2)}>
                    {i + 2}
                </PaginationCell>
            ))}
    </>
);

const BigPager = ({ activeIndex, total, onChange }: Props) => (
    <>
        {activeIndex <= paginationLimit
            ? pagination.map((_, i) => (
                  <PaginationCell key={i.toString()} active={activeIndex === 2 + i} onClick={() => onChange(2 + i)}>
                      {i + 2 === paginationLimit + 1 ? '...' : 2 + i}
                  </PaginationCell>
              ))
            : activeIndex > total - paginationLimit + 1
            ? pagination
                  .filter((_, i) => i !== paginationLimit - 1)
                  .map((_, i) => (
                      <PaginationCell
                          key={i.toString()}
                          active={activeIndex === total - paginationLimit + i + 1}
                          onClick={() => onChange(total - paginationLimit + i + 1)}
                      >
                          {i + 2 === 2 ? '...' : total - paginationLimit + i + 1}
                      </PaginationCell>
                  ))
            : pagination.map((_, i) => (
                  <PaginationCell
                      key={i.toString()}
                      active={activeIndex === activeIndex - (paginationLimit - 1) / 2 + i}
                      onClick={() => onChange(activeIndex - (paginationLimit - 1) / 2 + i)}
                  >
                      {i === 0 || i === paginationLimit - 1 ? '...' : activeIndex - (paginationLimit - 1) / 2 + i}
                  </PaginationCell>
              ))}
    </>
);

export const Pagination = ({
    currentIndex,
    onChange,
    onSizeChange,
    totalItems = 0,
    defaultSize = defaultLimit
}: WrapperProps) => {
    const total = useMemo(() => (totalItems === 0 ? 0 : Math.trunc((totalItems - 1) / defaultSize + 1)), [
        defaultSize,
        totalItems
    ]);
    const [value, setValue] = useState('');

    const handlePageSet = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        if (!isNaN(parseInt(inputValue[inputValue.length - 1])) || !inputValue) {
            setValue(e.currentTarget.value);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onChange(parseInt(value) - 1);
            setValue('');
        }
    };

    const onIndexChange = (index: number) => onChange(index - 1);

    const onSizeAndIndexChange = (size: string) => onSizeChange(0, Number(size));

    const videosCountStart = (currentIndex - 1) * defaultSize + 1;
    const videosCountsEnd = currentIndex * defaultSize;
    const showingVideosText = `Showing ${videosCountStart} - ${
        videosCountsEnd > totalItems ? totalItems : videosCountsEnd
    } out of ${totalItems}`;

    return (
        <>
            {total !== 0 && (
                <Wrapper>
                    <PaginationBlockWrapper flexBasis="20%" flexGrow="0" flexShrink="0">
                        <Span
                            fontSize={PaginationCellFontSize}
                            fontWeight={PaginationCellFontWeight}
                            lineHeight={PaginationCellLineHeight}
                        >
                            {showingVideosText}
                        </Span>
                    </PaginationBlockWrapper>
                    <PaginationBlockWrapper justifyCenter flexBasis="60%" flexGrow="0" flexShrink="0">
                        {currentIndex !== 1 && (
                            <Arrow onClick={() => onIndexChange(currentIndex - 1)}>
                                <CustomImg height={arrowImgHeight} src={leftArrowImg} width={arrowImgWidth} />
                            </Arrow>
                        )}
                        <PaginationWrapper>
                            <PaginationCell active={1 === currentIndex} onClick={() => onIndexChange(1)}>
                                1
                            </PaginationCell>
                            {total - 2 <= paginationLimit ? (
                                <SmallPager activeIndex={currentIndex} total={total} onChange={onIndexChange} />
                            ) : (
                                <BigPager activeIndex={currentIndex} total={total} onChange={onIndexChange} />
                            )}
                            {total !== 1 && (
                                <PaginationCell active={total === currentIndex} onClick={() => onIndexChange(total)}>
                                    {total}
                                </PaginationCell>
                            )}
                        </PaginationWrapper>
                        {currentIndex !== total && (
                            <Arrow onClick={() => onIndexChange(currentIndex + 1)}>
                                <CustomImg height={arrowImgHeight} src={rightArrowImg} width={arrowImgWidth} />
                            </Arrow>
                        )}
                        <MarginWrapper marginLeft="20px">
                            <Row alignCenter height={paginationCellHeight} marginBottom="0">
                                <Span
                                    fontSize={PaginationCellFontSize}
                                    fontWeight={PaginationCellFontWeight}
                                    lineHeight={PaginationCellLineHeight}
                                >
                                    Go to
                                </Span>
                                <MarginWrapper marginLeft="8px">
                                    <PaginationInput value={value} onChange={handlePageSet} onKeyDown={handleKeyDown} />
                                </MarginWrapper>
                            </Row>
                        </MarginWrapper>
                    </PaginationBlockWrapper>
                    <PaginationBlockWrapper alignCenter justifyEnd flexBasis="20%" flexGrow="0" flexShrink="0">
                        <MarginWrapper marginRight="8px">
                            <Span
                                fontSize={PaginationCellFontSize}
                                fontWeight={PaginationCellFontWeight}
                                lineHeight={PaginationCellLineHeight}
                            >
                                Show per Page
                            </Span>
                        </MarginWrapper>
                        <Select
                            isDarkStyle
                            top
                            defaultActive={defaultSize.toString()}
                            values={sizeValues}
                            width="65px"
                            onChange={onSizeAndIndexChange}
                        />
                    </PaginationBlockWrapper>
                </Wrapper>
            )}
        </>
    );
};
