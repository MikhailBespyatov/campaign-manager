import { buttonDiameter } from 'components/common/buttons/AddImageButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { FormTextInput, FormTextInputProps } from 'components/common/inputs/NewDesign/TextInput';
import { LabelNameSpan } from 'components/common/inputs/NewDesign/TextInput/styles';
import { FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { tertiaryMargin } from 'constants/styles';
import React from 'react';
import { imgProperties } from 'types';
import { PreviewWrapper } from './styles';

export interface ImageTextInputProps extends FormTextInputProps, imgProperties {}

export const ImageTextInput = ({ label, src, alt, required, ...props }: ImageTextInputProps) => (
    <FlexGrow>
        <MarginWrapper>
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
