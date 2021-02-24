import React, { useEffect, useState } from 'react';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { LabelNameSpan } from 'components/common/inputs/NewDesign/TextInput/styles';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { AddImageButton } from 'components/common/buttons/AddImageButton';
import { Span } from 'components/common/typography/Span';
import { Label } from 'types';
import { HiddenInput, PreviewWrapper, PreviewImage } from './styles';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';

export interface ImageInputProps extends Label {
    description?: string;
    value?: string;
    onChange: (value: string) => void;
}

export const ImageInput = ({ label, description, value, onChange }: ImageInputProps) => {
    const [file, setFile] = useState({ url: value });

    useEffect(() => setFile({ url: value }), [value]);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new window.FileReader();
        if (!event.target.files) return;

        const file = event.target.files[0];

        //!!! any - because not TS
        //TODO: any
        fileReader.onload = (fileLoad: any) => {
            const { result } = fileLoad.target;
            setFile({ url: result });
            onChange(result);
        };
        if (!file) return;
        fileReader.readAsDataURL(file);
    };

    return (
        <Column>
            <MarginWrapper marginBottom="22px">
                <LabelNameSpan>{label}</LabelNameSpan>
            </MarginWrapper>
            <Row alignCenter>
                <MarginWrapper marginRight="16px">
                    <RelativeWrapper>
                        {file.url ? (
                            <PreviewWrapper>
                                <PreviewImage src={file.url} />
                            </PreviewWrapper>
                        ) : (
                            <AddImageButton />
                        )}
                        <AbsoluteWrapper left="0" top="0">
                            <HiddenInput accept=".png, .jpg, .jpeg" type="file" onChange={onFileChange} />
                        </AbsoluteWrapper>
                    </RelativeWrapper>
                </MarginWrapper>

                <Span fontSize="13x" fontWeight="400" lineHeight="23px">
                    {description}
                </Span>
            </Row>
        </Column>
    );
};
