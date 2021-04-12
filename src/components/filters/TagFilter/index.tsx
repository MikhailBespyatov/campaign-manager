import { ClosableTag } from 'components/common/tags/ClosableTag';
import {
    closableTagMarginBottom,
    enterImgDiameter,
    enterImgMarginLeft,
    enterImgMarginRight,
    enterTitleFontSize,
    enterTitleFontWeight,
    enterTitleLineHeight,
    searchImgDiameter,
    searchImgMarginLeft,
    searchImgMarginRight,
    wrapperMarginBottom
} from 'components/filters/TagFilter/constants';
import { SearchAbsoluteWrapper, SearchInput, Wrapper } from 'components/filters/TagFilter/styles';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { Noop } from 'constants/global';
import { secondaryColor, secondaryPadding } from 'constants/styles';
import React, { FC, FocusEvent, KeyboardEvent, useEffect, useState } from 'react';
import { DefaultChecked, Title } from 'types';
import searchImg from 'assets/img/search_icon.svg';
import enterImg from 'assets/img/enter_icon.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';
import { Column, FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper/styles';

interface TagsFilterBlockProps {
    values: string[];
    removeValue: (value: string) => void;
}

export const TagsFilterBlock = ({ values, removeValue }: TagsFilterBlockProps) => {
    if (!!values?.length) {
        return (
            <Row marginTop={wrapperMarginBottom}>
                {values.map(i => (
                    <ClosableTag
                        key={i}
                        closable
                        marginBottom={closableTagMarginBottom}
                        marginRight={secondaryPadding}
                        onClose={() => removeValue(i)}
                    >
                        {i}
                    </ClosableTag>
                ))}
            </Row>
        );
    } else return null;
};

interface Props extends Title, DefaultChecked {
    tagsValues?: string[];
    onChange?: onTagsFilterChangeType;
}

export const TagFilter: FC<Props> = ({
    title = 'Search',
    //subtitle = 'by context',
    defaultChecked = false,
    tagsValues = [],
    onChange = Noop,
    children
}) => {
    const [checked] = useState(defaultChecked);
    const [values, setValues] = useState(tagsValues);

    useEffect(() => setValues(tagsValues), [tagsValues]);

    // const onCheckboxChange = (checked: boolean) => {
    //     setChecked(checked);
    //     onChange(checked, values);
    // };

    const addValue = (value: string) => {
        const newValues = [...values, value];
        setValues(newValues);
        onChange(checked, newValues);
    };

    const removeValue = (value: string) => {
        const newValues = values.filter(i => i !== value);
        setValues(newValues);
        onChange(checked, newValues);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        if (e.key === 'Enter' && value && !values.includes(value)) {
            addValue(value);
            (e.target as HTMLInputElement).value = '';
        }
    };

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        if (value && !values.includes(value)) {
            addValue(value);
            (e.target as HTMLInputElement).value = '';
        }
    };

    // useEffect(() => {
    //     onChange(checked, values);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [checked, values]);

    return (
        <Column width="100%">
            <Section alignCenter noWrap>
                <FlexGrow>
                    <RelativeWrapper>
                        <SearchAbsoluteWrapper>
                            <MarginWrapper marginLeft={searchImgMarginLeft} marginRight={searchImgMarginRight}>
                                <CustomImg height={searchImgDiameter} src={searchImg} width={searchImgDiameter} />
                            </MarginWrapper>
                            {/*<Span*/}
                            {/*    color={secondaryColor}*/}
                            {/*    fontSize={searchTitleFontSize}*/}
                            {/*    fontWeight={searchTitleFontWeight}*/}
                            {/*    lineHeight={searchTitleLineHeight}*/}
                            {/*>*/}
                            {/*    {title}*/}
                            {/*</Span>*/}
                        </SearchAbsoluteWrapper>
                        <SearchAbsoluteWrapper right>
                            <Span
                                color={secondaryColor}
                                fontSize={enterTitleFontSize}
                                fontWeight={enterTitleFontWeight}
                                lineHeight={enterTitleLineHeight}
                                opacity={0.5}
                            >
                                Press enter
                            </Span>
                            <MarginWrapper marginLeft={enterImgMarginLeft} marginRight={enterImgMarginRight}>
                                <CustomImg height={enterImgDiameter} src={enterImg} width={enterImgDiameter} />
                            </MarginWrapper>
                        </SearchAbsoluteWrapper>
                        <Wrapper>
                            <SearchInput placeholder={title} type="text" onBlur={onBlur} onKeyDown={onKeyDown} />
                        </Wrapper>
                    </RelativeWrapper>
                </FlexGrow>
                {children}
            </Section>
            <TagsFilterBlock removeValue={removeValue} values={values} />
        </Column>
    );
};
