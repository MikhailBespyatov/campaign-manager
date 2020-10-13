import { TextInput } from 'components/common/inputs/Input';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { P } from 'components/common/typography/titles/P';
import { filterMarginRight, wrapperBackground } from 'components/filters/TagFilter/constants';
import { Wrapper } from 'components/filters/TagFilter/styles';
import { onTagsFilterChangeType } from 'components/filters/TagFilter/type';
import { BooleanCheckbox } from 'components/FormComponents/inputs/BooleanCheckbox';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import { secondaryPadding } from 'constants/styles';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { DefaultChecked, Title } from 'types';

interface Props extends Title, DefaultChecked {
    tagsValues?: string[];
    onChange?: onTagsFilterChangeType;
}

export const TagFilter = ({
    title = 'Filter',
    subtitle = 'by context',
    defaultChecked = false,
    tagsValues = [],
    onChange = noop
}: Props) => {
    const [checked, setChecked] = useState(defaultChecked);
    const [values, setValues] = useState(tagsValues);

    const onCheckboxChange = (checked: boolean) => setChecked(checked);

    const addValue = (value: string) => setValues([...values, value]);
    const removeValue = (value: string) => setValues(values.filter(i => i !== value));

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // // @ts-ignore
        const value = (e.target as HTMLInputElement).value;
        if (e.key === 'Enter' && !values.includes(value)) {
            addValue(value);
            // // @ts-ignore
            (e.target as HTMLInputElement).value = '';
        }
    };

    useEffect(() => {
        onChange(checked, values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked, values]);

    return (
        <Section alignCenter noWrap marginBottom="35px">
            <Column marginRight={filterMarginRight}>
                <Row noWrap marginBottom={secondaryPadding}>
                    <P opacity={0.4}>{title}</P>
                </Row>
                <Row noWrap marginBottom={secondaryPadding}>
                    <Column marginRight={secondaryPadding}>
                        <BooleanCheckbox onChange={onCheckboxChange} />
                    </Column>
                    <P noWrap opacity={0.4}>
                        {subtitle}
                    </P>
                </Row>
            </Column>
            <Wrapper>
                {values.map(i => (
                    <ClosableTag
                        key={i}
                        closable
                        marginBottom="0"
                        marginRight={secondaryPadding}
                        onClose={() => removeValue(i)}
                    >
                        {i}
                    </ClosableTag>
                ))}
                <TextInput background={wrapperBackground} type="text" width="100%" onKeyDown={onKeyDown} />
            </Wrapper>
        </Section>
    );
};
