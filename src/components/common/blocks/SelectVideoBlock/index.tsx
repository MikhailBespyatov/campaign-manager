import React, { FC } from 'react';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import chooseVideo from 'assets/img/choose_video.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';

export const SelectVideoBlock: FC = () => (
    <>
        <CustomImg height="100%" src={chooseVideo} width="100%" />
        <AbsoluteWrapper bottom="100px" left="0" width="100%">
            <Column alignCenter justifyCenter>
                <MarginWrapper marginBottom="20px">
                    <Span fontSize="18px" fontWeight="400" lineHeight="22px">
                        SELECT VIDEO
                    </Span>
                </MarginWrapper>
                <MarginWrapper marginLeft="43px" marginRight="43px">
                    <Span alignCenter color="#979797" fontSize="16px" fontWeight="400" lineHeight="22px">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, iusto?
                    </Span>
                </MarginWrapper>
            </Column>
        </AbsoluteWrapper>
    </>
);
