import leftArrowImg from 'assets/img/left_arrow.svg';
import rightArrowImg from 'assets/img/right_arrow.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { arrowImgHeight, arrowImgWidth, testArray } from 'components/Layouts/Pagination/constants';
import { Arrow, PaginationCell, PaginationWrapper, Wrapper } from 'components/Layouts/Pagination/styles';
import React from 'react';

// export const Pagination = ({ currentPage = 1, onChange, total = 100, size = 10 }: Props) => (
export const Pagination = () => (
    <Wrapper>
        <Arrow>
            <CustomImg height={arrowImgHeight} src={leftArrowImg} width={arrowImgWidth} />
        </Arrow>
        <PaginationWrapper>
            {testArray.map(i => (
                <PaginationCell key={i} active={i === 5}>
                    {i + 1}
                </PaginationCell>
            ))}
        </PaginationWrapper>
        <Arrow>
            <CustomImg height={arrowImgHeight} src={rightArrowImg} width={arrowImgWidth} />
        </Arrow>
    </Wrapper>
);
