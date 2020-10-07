import leftArrowImg from 'assets/img/left_arrow.svg';
import rightArrowImg from 'assets/img/right_arrow.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { arrowImgHeight, arrowImgWidth, pagination, paginationLimit } from 'components/Layouts/Pagination/constants';
import { Arrow, PaginationCell, PaginationWrapper, Wrapper } from 'components/Layouts/Pagination/styles';
import { defaultLimit } from 'constants/defaults';
import React, { useMemo } from 'react';

interface WrapperProps {
    currentIndex: number;
    totalItems?: number;
    defaultSize?: number;
    onChange: (current: number) => void;
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

export const Pagination = ({ currentIndex, onChange, totalItems = 0, defaultSize = defaultLimit }: WrapperProps) => {
    const total = useMemo(() => (totalItems === 0 ? 0 : Math.trunc((totalItems - 1) / defaultSize + 1)), [
        defaultSize,
        totalItems
    ]);

    const onIndexChange = (index: number) => onChange(index - 1);

    return (
        <>
            {total !== 0 && (
                <Wrapper>
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
                </Wrapper>
            )}
        </>
    );
};
