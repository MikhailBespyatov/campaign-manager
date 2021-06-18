import React from 'react';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { LabelNameSpan } from 'components/common/inputs/NewDesign/TextInput/styles';
import { FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { PreviewWrapper } from './styles';
import { FormTextInput, FormTextInputProps } from 'components/common/inputs/NewDesign/TextInput';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { imgProperties } from 'types';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { buttonDiameter } from 'components/common/buttons/AddImageButton/constants';
import { tertiaryMargin } from 'constants/styles';

export interface ImageTextInputProps extends FormTextInputProps, imgProperties {}

export const ImageTextInput = ({ label, src, alt, required, ...props }: ImageTextInputProps) => (
    <FlexGrow>
        <MarginWrapper marginBottom="22px">
            <LabelNameSpan>
                {label}
                {required && '*'}
            </LabelNameSpan>
        </MarginWrapper>
        <Section alignCenter>
            {src && (
                <MarginWrapper marginRight={tertiaryMargin}>
                    <PreviewWrapper>
                        <CustomImg alt={alt} height={buttonDiameter} src={src} width={buttonDiameter} />
                    </PreviewWrapper>
                </MarginWrapper>
            )}
            <FlexGrow>
                <ContentWrapper width="100%">
                    <FormTextInput {...props} />
                </ContentWrapper>
            </FlexGrow>
        </Section>
    </FlexGrow>
);
